import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);
    return await this.studentRepository.save(student);
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({
        where: { id},
        });
  }
  async update(id: number, updateStudentDto:CreateStudentDto){
    await this.studentRepository.update(id, updateStudentDto);
    return this.findOne(id);
  }

  async remove(id:number){
    const student = await this.findOne(id);

    if (!student){
        return{
            message: `Student not found`,
        };
    }
    await this.studentRepository.delete(id);
    return{
        message: `Student Deleted Successfully`
    };
    }
}