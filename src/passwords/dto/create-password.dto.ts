import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreatePasswordDto {
    @IsString()
    @ApiProperty({
        example: 'qwerty'
    })
    password: string;
}