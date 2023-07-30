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

export class UploadAvatarDto {
  image: string;
  id: string;
}
