import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService) {}

    public async signIn(email: string, pass: string) {
        let user = await this.usersService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException();
        }

        let isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new UnauthorizedException();
        }

        let payload = { sub: user.id, email: user.email, userName: user.userName };

        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

    public async signUp(userDto: UserDto) {
        return await this.usersService.createUser(userDto);
    }
}
