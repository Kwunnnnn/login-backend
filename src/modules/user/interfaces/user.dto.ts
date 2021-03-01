import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class UsersDTO {
  @ApiProperty()
  usersID?: number;

  @ApiProperty()
  name?: String;

  @ApiProperty()
  @IsEmail()
  email?: String;

  @ApiProperty()
  password?: String;

  @ApiProperty()
  createdAt?: Date;
}
