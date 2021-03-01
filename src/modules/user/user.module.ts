import { UsersService } from 'src/modules/user/services/user.service';
import { UsersProviders } from './user.provider';
import { UsersController } from './controllers/user.controller';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { CryptoService } from '../utils/crypto.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...UsersProviders, UsersService, CryptoService],
  exports: [UsersService],
})
export class UsersModule {}
