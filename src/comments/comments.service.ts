import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { User } from '../users/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new Comment();

    comment.user = createCommentDto.user;
    comment.comment = createCommentDto.comment;

    return this.commentsRepository.save(comment);
  }

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  findOne(id: number): Promise<Comment> {
    return this.commentsRepository.findOne(id);
  }

  findByUser(user: User): Promise<Comment> {
    return this.commentsRepository.findOne(user);
  }

  async remove(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}