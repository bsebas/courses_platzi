import { PasswordJwtGuard } from './password-jwt.guard';

describe('PasswordJwtGuard', () => {
  it('should be defined', () => {
    expect(new PasswordJwtGuard()).toBeDefined();
  });
});
