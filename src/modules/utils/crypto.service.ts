import * as crypto from 'crypto-js';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
  constructor() {}

  async hash(password) {
    return bcrypt.hash(password, 10);
  }

  async compare(password, hash) {
    return bcrypt.compare(password, hash);
  }

  async createToken(data, exipration = undefined) {
    return jwt.sign(data, process.env.SECRET_TOKEN, {
      expiresIn: exipration || +process.env.EXPIRATION_TIME * 60 * 60 * 24,
    });
  }
}
