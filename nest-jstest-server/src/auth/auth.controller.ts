import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.decorator';
import { UserDto } from 'src/users/users.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    public signIn(@Body() singInDto: UserDto) {
        return this.authService.signIn(singInDto.email, singInDto.password);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signup')
    public signUp(@Body() singUpDto: UserDto) {
        return this.authService.signUp(singUpDto);
    }

    @Get('profile')
    public getProfile(@Request() req : any) {
        return req.user;
    }
}
