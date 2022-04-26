import { Password } from "../../passwords/password.entity";
import { IsString, IsInstance } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @IsString()
    @ApiProperty({
        example: 'Ivan'
    })
    readonly name: string;


    @IsString()
    @ApiProperty({
        example: 'Ivanov'
    })
    readonly surname: string;


    @IsString()
    @ApiProperty({
        example: 'superivan'
    })
    readonly login: string;


    // @IsInstance(Password)
    // @ApiProperty({
    //     example: 'qwerty'
    // })
    // readonly password: Password;
}