import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import {
  createLocation,
  deleteLocations,
  getLocationById,
  getLocations,
  payloadUpdate,
} from './dto/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Get()
  async getLocations(@Param() dto: getLocations) {
    return this.locationService.getLocations(dto);
  }

  @Get(':id')
  async getLocationById(@Param() dto: getLocationById) {
    return this.locationService.getLocationById(dto);
  }

  @Put(':id')
  async updateLocation(
    @Param() dto: getLocationById,
    @Body() dataDto: payloadUpdate,
  ) {
    return this.locationService.update(dto, dataDto);
  }

  @Post('create')
  async createLocation(@Body() dto: createLocation) {
    return this.locationService.create(dto);
  }

  @Delete()
  async deleteLocations(@Body() dto: deleteLocations) {
    return this.locationService.delete(dto);
  }
}
