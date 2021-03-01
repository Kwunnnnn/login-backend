import { CryptoService } from './../../utils/crypto.service';
import { UsersService } from './../services/user.service';
import {
  Controller,
  Get,
  Res,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cryptoService: CryptoService,
  ) {}

  @Post()
  async newUsers(@Body() body, @Res() res) {
    try {
      const result = await this.usersService.findOne(body.email);
      if (result) {
        return res.status(HttpStatus.CONFLICT).json({
          message: 'อีเมลมีอยู่ในระบบแล้ว',
        });
      }

      const users = await this.usersService.create({
        ...body,
        password: await this.cryptoService.hash(body.password),
        createdAt: new Date(),
      });
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      throw new InternalServerErrorException({ message: error.message });
    }
  }
}
