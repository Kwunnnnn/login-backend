import { UserModel } from './../../../constants/models';
import { UsersDTO } from './../interfaces/user.dto';
import { Users } from './../interfaces/user.model';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name, false);

  constructor(
    @InjectModel('User')
    private readonly users: Model<Users>,
  ) {}

  async findOne(options = {}): Promise<Users> {
    return await this.users.findOne({ email: options }).lean();
  }

  async create(data: UsersDTO): Promise<Users> {
    return await this.users.create(data);
  }
}
