import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';


@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private CommentsRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.CommentsRepository.find();
  }

  findOne(id: string): Promise<Comment> {
    return this.CommentsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.CommentsRepository.delete(id);
  }
}