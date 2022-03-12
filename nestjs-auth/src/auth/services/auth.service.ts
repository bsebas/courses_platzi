import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string) {
    const getUser = await this.userService.findEmail(email);
    const isMatch = await bcrypt.compare(password, getUser.password);

    if (getUser && isMatch) {
      return getUser;
    }
    return null;
  }
}
