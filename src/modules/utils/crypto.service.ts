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

  // async encryptData(data) {
  //   return crypto.AES.encrypt(
  //     JSON.stringify(data),
  //     process.env.MAIL_TOKEN_SECRET,
  //   ).toString();
  // }

  // async decryptData(token) {
  //   const bytes = crypto.AES.decrypt(token, process.env.MAIL_TOKEN_SECRET);
  //   return JSON.parse(bytes.toString(crypto.enc.Utf8));
  // }

  // async randomToken(len = 20, encoding: any = 'hex') {
  //   return randomBytes(len).toString(encoding);
  // }

  // iv = 'e539ce88efb0ca0c';
  // algorithm = 'aes-256-ctr';
  // secretkey = 'ae539ce88efb00c48cbf883bc3c5e11b';
  // encryptIv = (text, encoding: any = 'hex') => {
  //   let cipher = createCipheriv(this.algorithm, this.secretkey, this.iv);
  //   let crypted = cipher.update(text.toString(), 'utf8', encoding);
  //   crypted += cipher.final(encoding);
  //   return crypted;
  // };

  // decryptIv = (text, encoding: any = 'hex') => {
  //   try {
  //     let decipher = createDecipheriv(this.algorithm, this.secretkey, this.iv);
  //     let dec = decipher.update(text.toString(), encoding, 'utf8');
  //     dec += decipher.final('utf8');
  //     return dec;
  //   } catch (error) {
  //     return text;
  //   }
  // };
}
