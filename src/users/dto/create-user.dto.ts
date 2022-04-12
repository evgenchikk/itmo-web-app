import { Password } from "../../passwords/password.entity";
import { IsString, IsInstance } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @IsString()
    @ApiProperty({
        example: 'Ivan'
    })
    name: string;


    @IsString()
    @ApiProperty({
        example: 'Ivanov'
    })
    surname: string;


    @IsString()
    @ApiProperty({
        example: 'superivan'
    })
    login: string;


    @IsInstance(Password)
    @ApiProperty({
        example: 'qwerty'
    })
    password: Password;
}