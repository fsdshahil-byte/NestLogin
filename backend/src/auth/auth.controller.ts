import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  test() {
    return "Auth Module Working";
  }
  @Post('login')
 login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}