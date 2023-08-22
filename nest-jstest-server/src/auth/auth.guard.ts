import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './auth.decorator';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private jwtService: JwtService, 
               private reflector: Reflector,
               private configService: ConfigService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    return true;
    /*let isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    if (isPublic) {
      return true;
    }

    let request = context.switchToHttp().getRequest();
    let token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      let payload = await this.jwtService.verifyAsync(token, { secret: this.configService.get<string>('JWT_SECRET') });

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;*/
  }

  private extractTokenFromHeader(request: Request) : string | undefined {
    let [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined; 
  }
}
