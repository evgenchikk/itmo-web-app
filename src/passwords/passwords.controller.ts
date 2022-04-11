import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePasswordDto } from './dto/create-password.dto';
import { Password } from './password.entity';
import { PasswordsService } from './passwords.service';


@Controller('passwords')
export class PasswordsController {
  constructor(private readonly passwordsService: PasswordsService) {}

  @Post()
  async create(@Body() createPasswordDto: CreatePasswordDto): Promise<Password> {
    return await this.passwordsService.create(createPasswordDto);
  }


  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Password> {
    return await this.passwordsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.passwordsService.remove(id);
  }
}