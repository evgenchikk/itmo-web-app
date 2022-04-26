import { Body, Controller, Delete, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'


@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: 'create new user' })
    @ApiResponse({ status: 201, description: 'created' })
    @ApiResponse({ status: 400, description: 'bad request' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return await this.usersService.create(createUserDto);
    }


    @ApiOperation({ summary: 'get all users' })
    @ApiResponse({ status: 200, description: 'all users found' })
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Get()
    async findAll(): Promise<User[]> {
      return await this.usersService.findAll();
    }


    @ApiOperation({ summary: 'get user by id' })
    @ApiResponse({ status: 200, description: 'user found' })
    @ApiResponse({ status: 204, description: 'no content'})
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Get('id/:id')
    async findOneById(@Param('id') id: string): Promise<User> {
      return await this.usersService.findOneById(id);
    }


    @ApiOperation({ summary: 'get user by name' })
    @ApiResponse({ status: 200, description: 'user found' })
    @ApiResponse({ status: 204, description: 'no content'})
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Get('name/:name')
    async findByName(@Param('name') name: string): Promise<User[]> {
      const users = await this.usersService.findByName(name);
      
      // if (users == []) {
      //   throw new NotFoundException('No users found');
      // }

      return users; 
    }


    @ApiOperation({ summary: 'get user by login' })
    @ApiResponse({ status: 200, description: 'user found' })
    @ApiResponse({ status: 204, description: 'no content'})
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Get('login/:login')
    async findOneByLogin(@Param('login') login: string): Promise<User> {
      return await this.usersService.findOneByLogin(login.toLowerCase());
    }


    @ApiOperation({ summary: 'delete user by id' })
    @ApiResponse({ status: 200, description: 'user deleted' })
    @ApiResponse({ status: 204, description: 'user not found'})
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Delete(':id/delete')
    async remove(@Param('id') id: number): Promise<void> {
      return await this.usersService.remove(id);
    }
}