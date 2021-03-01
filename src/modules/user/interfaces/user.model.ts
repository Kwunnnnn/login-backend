import { Document } from 'mongoose';

export interface Users extends Document {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  createdAt: Date;
}
