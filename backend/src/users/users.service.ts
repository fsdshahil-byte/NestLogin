import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(registerUserDto: RegisterUserDto) {

  // Check if email already exists
  const existingUser = await this.userRepository.findOne({
    where: {
      email: registerUserDto.email,
    },
  });

  if (existingUser) {
    throw new BadRequestException('Email already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);

  // Create user
  const user = this.userRepository.create({
    ...registerUserDto,
    password: hashedPassword,
  });

  // Save user
  return await this.userRepository.save(user);
}

}