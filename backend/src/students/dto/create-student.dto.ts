import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  course!: string;

  @IsNumber()
  age!: number;

  @IsNotEmpty()
  @IsString()
  phone!: string;
}