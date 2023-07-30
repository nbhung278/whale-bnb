import { Injectable, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadAvatarDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}
  async uploadAvartar(dto: UploadAvatarDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: dto.id,
        },
        data: {
          image: dto.image,
        },
      });
      return {
        message: 'upload avatar successfully !',
        status: 200,
        data: user,
      };
    } catch (error) {
      console.log(error);
      return {
        message: error,
      };
    }
  }
}
