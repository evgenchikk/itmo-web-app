import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Password } from './password.entity';
import { CreatePasswordDto } from './dto/create-password.dto';


@Injectable()
export class PasswordsService {
  constructor(
    @InjectRepository(Password)
    private passwordsRepository: Repository<Password>,
  ) {}

  // findAll(): Promise<Password[]> {
  //   return this.PasswordsRepository.find();
  // }

  create(createUserDto: CreatePasswordDto): Promise<Password> {
    throw new NotImplementedException();

    // const password = new Password();
    
    // password.password = createUserDto.password;

    // return this.passwordsRepository.save(password);
  }

  findOne(id: number): Promise<Password> {
    return this.passwordsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.passwordsRepository.delete(id);
  }
}