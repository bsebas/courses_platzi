import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const getUser = await this.userService.findEmail(email);
    if (getUser) {
      const isMatch = await bcrypt.compare(password, getUser.password);
      if (isMatch) {
        return getUser;
      }
    }
    return null;
  }
  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return { access_token: this.jwtService.sign(payload), user };
  }
}
