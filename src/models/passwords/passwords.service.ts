import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Password } from './password.entity';


@Injectable()
export class PasswordsService {
  constructor(
    @InjectRepository(Password)
    private PasswordsRepository: Repository<Password>,
  ) {}

  findAll(): Promise<Password[]> {
    return this.PasswordsRepository.find();
  }

  findOne(id: string): Promise<Password> {
    return this.PasswordsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.PasswordsRepository.delete(id);
  }
}