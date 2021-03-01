import { UserSchema } from './../../../database/schema/user.schema';
import { IAuth, IUserWithoutPW } from './../interfaces/auth.interface';
import { Controller, Res, HttpStatus, Post, Body, Req } from '@nestjs/common';
import { CryptoService } from 'src/modules/utils/crypto.service';
import { UsersService } from 'src/modules/user/services/user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly cryptoService: CryptoService,
    private readonly userService: UsersService,
  ) {}

  @Post('login')
  async singIn(@Body() body: IAuth, @Res() $res) {
    const user = await this.userService.findOne(body.email);

    if (user) {
      const comparePW = await this.cryptoService.compare(
        body.password,
        user.password,
      );

      if (!comparePW) {
        return $res.status(HttpStatus.UNAUTHORIZED).json({
          message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
        });
      }
      const userInfo = {
        ...user,
      };

      const accessToken = await this.cryptoService.createToken(userInfo);

      return $res.status(HttpStatus.OK).json({
        user: userInfo,
        accessToken,
      });
    }

    return $res.status(HttpStatus.UNAUTHORIZED).json({
      message: 'ไม่พบผู้ใช้งานนี้ภายในระบบ',
    });
  }
}
