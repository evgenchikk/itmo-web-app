import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';
import { CommentsService } from './comments.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}


    @ApiOperation({ summary: 'create new comment' })
    @ApiResponse({ status: 201, description: 'created' })
    @ApiResponse({ status: 400, description: 'bad request' })
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Post()
    async create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
        return await this.commentsService.create(createCommentDto);
    }


    @ApiOperation({ summary: 'get all comments '})
    @ApiResponse({ status: 200, description: 'all comments found', type: Comment })
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Get()
    async findAll(): Promise<Comment[]> {
        return await this.commentsService.findAll();
    }


    @ApiOperation({ summary: 'get comment by id' })
    @ApiResponse({ status: 200, description: 'comment found', type: Comment })
    @ApiResponse({ status: 204, description: 'no content' })
    @ApiResponse({ status: 400, description: 'bad request' })
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Get('id/:id')
    async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Comment> {
        return await this.commentsService.findOneById(id);
    }


    @ApiOperation({ summary: 'get comments by user id' })
    @ApiResponse({ status: 200, description: 'comments found', type: Comment })
    @ApiResponse({ status: 204, description: 'no content' })
    @ApiResponse({ status: 400, description: 'bad request' })
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Get('user/:id')
    async findByUserId(@Param('id', ParseIntPipe) user_id: number): Promise<Comment[]> {
        return await this.commentsService.findByUserId(user_id);
    }


    @ApiOperation({ summary: 'delete comment by id' })
    @ApiResponse({ status: 200, description: 'comment deleted' })
    @ApiResponse({ status: 204, description: 'comment not found' })
    @ApiResponse({ status: 400, description: 'bad request' })
    @ApiResponse({ status: 401, description: 'not authorized' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @ApiResponse({ status: 501, description: 'not implemented' })
    @Delete(':id/delete')
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.commentsService.remove(id);
    }
}