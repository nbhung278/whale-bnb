import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService, UserService],
})
export class LocationsModule {}
