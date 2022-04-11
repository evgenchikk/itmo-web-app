import { Password } from "../../passwords/password.entity";


export class CreateUserDto {
    name: string;
    surname: string;
    login: string;
    password: Password;
}