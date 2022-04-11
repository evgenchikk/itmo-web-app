import { User } from "../../users/user.entity";


export class CreateCommentDto {
    user: User;
    comment: string;
}