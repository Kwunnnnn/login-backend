import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  password: { type: String, default: null },
  email: {
    type: String,
    unique: true,
    default: null,
    required: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid email format'],
  },
  createdAt: { type: Date, default: new Date() },
});

UserSchema.set('toJSON', { getters: true });
UserSchema.set('toObject', { getters: true });
