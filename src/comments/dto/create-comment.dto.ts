import { User } from '../../users/user.entity';
import { IsString, IsInstance } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCommentDto {
    @IsInstance(User)
    @ApiProperty()
    readonly user: User;

    @IsString()
    @ApiProperty({ example: 'Lorem Ipsum' })
    readonly comment: string;
}