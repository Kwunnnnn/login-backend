import { Connection } from 'mongoose';

import { UserSchema } from '../../database/schema/user.schema';
import { UserModel } from '../../constants/models';

export const UsersProviders = [
  {
    provide: UserModel.model,
    useFactory: (connection: Connection) =>
      connection.model(UserModel.schema, UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
