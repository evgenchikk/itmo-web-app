import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';


@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new Comment();
    comment.user_id = createCommentDto.user_id;
    comment.comment = createCommentDto.comment;
    
    return this.commentsRepository.save(comment);
  }

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  findOneById(id: number): Promise<Comment> {
    return this.commentsRepository.findOne(id);
  }

  findByUserId(user_id: number): Promise<Comment[]> {
    return this.commentsRepository.find({ user_id: user_id });
  }

  async remove(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}