import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.STUserid = createUserDto.STUserid;
    user.name = createUserDto.name;
    user.surname = createUserDto.surname;
    user.login = createUserDto.login.toLowerCase();
    // user.isOnline = true;
    // user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneById(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findOneBySTUserid(id: string): Promise<User> {
    return this.usersRepository.findOne({ STUserid: id });
  }

  findByName(username: string): Promise<User[]> {
    return this.usersRepository.find({ name: username });
  }

  findOneByLogin(login: string): Promise<User> {
    return this.usersRepository.findOne({ login: login });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}