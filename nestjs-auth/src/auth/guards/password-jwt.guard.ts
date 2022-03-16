import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IsPublicKey } from '../decorators/public.decorator';

@Injectable()
export class PasswordJwtGuard extends AuthGuard('jwt') {
  constructor(private reflect: Reflector) {
    super({});
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflect.get(IsPublicKey, context.getHandler());
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }
}
