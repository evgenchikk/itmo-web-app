import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePasswordDto } from './dto/create-password.dto';
import { Password } from './password.entity';
import { PasswordsService } from './passwords.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';


@ApiTags('passwords')
@Controller('passwords')
export class PasswordsController {
  constructor(private readonly passwordsService: PasswordsService) {}


  @ApiOperation({ summary: 'create new password' })
  // @ApiResponse({ status: 201, description: 'created' })
  // @ApiResponse({ status: 403, description: 'forbidden' })
  @ApiResponse({ status: 501, description: 'not implemented' })
  @Post()
  async create(@Body() createPasswordDto: CreatePasswordDto): Promise<Password> {
    return await this.passwordsService.create(createPasswordDto);
  }


  @ApiOperation({ summary: 'get password by id' })
  // @ApiResponse({ status: 200, description: 'password found', type: Password })
  // @ApiResponse({ status: 204, description: 'no content'})
  // @ApiResponse({ status: 401, description: 'not authorized' })
  // @ApiResponse({ status: 403, description: 'forbidden' })
  @ApiResponse({ status: 501, description: 'not implemented' })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Password> {
    return await this.passwordsService.findOne(id);
  }


  @ApiOperation({ summary: 'delete password by id' })
  // @ApiResponse({ status: 200, description: 'password deleted' })
  // @ApiResponse({ status: 204, description: 'comment not found'})
  // @ApiResponse({ status: 403, description: 'forbidden' })
  @ApiResponse({ status: 501, description: 'not implemented' })
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.passwordsService.remove(id);
  }
}