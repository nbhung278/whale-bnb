import { Controller, Get, Post, Req, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { Request } from 'express';
import { UserService } from './user.service';
import { UploadAvatarDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('uploadAvatar')
  async uploadAvartar(@Body() dto: UploadAvatarDto) {
    return this.userService.uploadAvartar(dto);
  }
}
