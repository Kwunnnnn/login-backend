import { AuthenProviders } from './auth.provider';
import { AuthController } from './controllers/auth.controller';
import { UsersModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { CryptoService } from '../utils/crypto.service';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [...AuthenProviders, CryptoService],
  exports: [],
})
export class AuthenModule {}
