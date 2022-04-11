import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';
import { User } from '../users/user.entity';
import { CommentsService } from './comments.service';


@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    async create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
        return await this.commentsService.create(createCommentDto);
    }

    @Get()
    async findAll(): Promise<Comment[]> {
        return await this.commentsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Comment> {
        return await this.commentsService.findOne(id);
    }

    @Get(':user')
    async findByUser(@Param('user') user: User): Promise<Comment> {
        return await this.commentsService.findByUser(user);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return await this.commentsService.remove(id);
    }
}