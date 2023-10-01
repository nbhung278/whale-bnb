import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  createLocation,
  deleteLocations,
  getLocationById,
  getLocations,
  payloadUpdate,
} from './dto/location.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocationsService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private user: UserService,
  ) {}
  async create(dto: createLocation) {
    try {
      const {
        name,
        country,
        distance,
        startDate,
        endDate,
        type,
        isNew,
        price,
        address,
        servicePrice,
        tax,
        images,
        userId,
        rates,
        description,
      } = dto;
      const location = await this.prisma.location.create({
        data: {
          name,
          userId,
          country,
          distance,
          images,
          type,
          rates,
          isNew,
          price,
          address,
          servicePrice,
          tax,
          description,
        },
      });
      return {
        message: 'create location successfully !',
        status: 200,
        data: location,
      };
    } catch (error) {
      console.log(error);
      return {
        message: error,
      };
    }
  }
  async getLocations(dto: getLocations) {
    try {
      const test = this.user.callUser();
      console.log('this.user', test);
      const { limit, skip } = dto;
      const locations = await this.prisma.location.findMany({
        include: {
          user: {
            select: {
              id: true,
              userName: true,
              firstName: true,
              lastName: true,
              phone: true,
              gender: true,
              address: true,
              image: true,
              role: true,
              birthDay: true,
              email: true,
            },
          },
        },
      });
      if (locations) {
        return {
          message: 'get locations successfully !',
          status: 200,
          data: locations,
        };
      } else {
        return {
          message: 'Dữ liệu trống !',
          status: 200,
          data: locations,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: error,
      };
    }
  }

  async getLocationById(dto: getLocationById) {
    try {
      const { id } = dto;
      const location = await this.prisma.location.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              id: true,
              userName: true,
              firstName: true,
              lastName: true,
              phone: true,
              gender: true,
              address: true,
              image: true,
              role: true,
              birthDay: true,
              email: true,
            },
          },
        },
      });
      if (location) {
        return {
          message: 'get location successfully !',
          status: 200,
          data: location,
        };
      } else {
        return {
          message: 'Không có location nào có id như vậy !',
          status: 201,
          data: location,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: error,
      };
    }
  }

  async delete(dto: deleteLocations) {
    try {
      const { ids } = dto;
      await this.prisma.location.deleteMany({
        where: {
          id: {
            in: ids,
          },
        },
      });
      return {
        message: 'delete locations successfully !',
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        message: error,
      };
    }
  }

  async update(dto: getLocationById, dataDto: payloadUpdate) {
    try {
      const { id } = dto;
      const res = await this.prisma.location.update({
        where: {
          id: id,
        },
        data: {
          ...dataDto,
        },
      });
      return {
        message: 'update location successfully !',
        status: 200,
        data: res,
      };
    } catch (error) {
      console.log(error);
      return {
        message: error,
      };
    }
  }
}
