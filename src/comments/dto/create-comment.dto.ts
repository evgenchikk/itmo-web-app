import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateCommentDto {
    @IsNumber()
    @ApiProperty({ example: 1 })
    readonly user_id: number;

    @IsString()
    @ApiProperty({ example: 'Lorem Ipsum' })
    readonly comment: string;
}