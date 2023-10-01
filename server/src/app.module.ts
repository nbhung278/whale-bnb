import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { LocationsService } from './locations/locations.service';
import { LocationsController } from './locations/locations.controller';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    LocationsModule,
  ],
  controllers: [AppController, LocationsController],
  providers: [AppService, LocationsService],
})
export class AppModule {}
