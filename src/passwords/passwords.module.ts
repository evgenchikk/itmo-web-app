import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordsService } from './passwords.service';
import { PasswordsController } from './passwords.controller';
import { Password } from './password.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Password])],
  providers: [PasswordsService],
  controllers: [PasswordsController],
})
export class PasswordsModule {}