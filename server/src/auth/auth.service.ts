import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, LoginDto } from './dto';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const saltOrRounds = 10;
      const {
        firstName,
        lastName,
        userName,
        email,
        password,
        type,
        birthDay,
        gender,
        address,
        phone,
        image,
        role,
        deletedAt,
      } = dto;

      const hash = await bcrypt.hash(password, saltOrRounds);
      const user = await this.prisma.user.create({
        data: {
          firstName,
          type,
          lastName,
          userName,
          email,
          birthDay,
          gender,
          address,
          phone,
          image,
          role,
          deletedAt,
          password: hash,
        },
      });
      return { message: 'Sign up successfully !', data: user };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        throw new Error('Email already exists, please enter another email.');
      }
      throw error;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    } else {
      const match = await bcrypt.compare(dto.password, user.password);
      if (match) {
        const access_token = await this.signToken(user);
        return {
          message: `Log in successfully. Welcome back ${user.firstName} ${user.lastName}`,
          data: { ...user, ...access_token },
        };
      } else {
        throw new ForbiddenException('Credentials incorrect');
      }
    }
  }

  async signToken(user: object): Promise<{ access_token: any }> {
    // const payload = {
    //   sub: userId,
    //   email: email,
    // };
    const payload = user;
    const secret = this.config.get('JWT_SECRET');
    console.log(
      this.jwt.signAsync(payload, {
        expiresIn: '15m',
        secret: secret,
      }),
    );
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });
    return { access_token: token };
  }
}
