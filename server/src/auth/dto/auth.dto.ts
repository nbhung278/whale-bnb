import {
  IsDateString,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from './match.decorator';

export class AuthDto {
  firstName: string;
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MaxLength(255)
  userName: string;

  role: string;

  // @IsString()

  gender: string;

  phone: string;

  address: string;

  image: string;

  // @IsDateString()
  birthDay: Date;

  // @IsDateString()
  deletedAt: Date;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(64)
  password: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @Match('password', {
    message: "The confirmation password doesn't match the password",
  })
  passwordConfirm: string;
}

// eslint-disable-next-line prettier/prettier
export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
