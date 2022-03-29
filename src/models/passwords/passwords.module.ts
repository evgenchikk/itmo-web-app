import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordsService } from './Passwords.service';
import { PasswordsController } from './Passwords.controller';
import { Password } from './password.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Password])],
  providers: [PasswordsService],
  controllers: [PasswordsController],
})
export class PasswordsModule {}