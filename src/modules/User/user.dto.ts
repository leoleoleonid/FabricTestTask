import {User} from "./user.entity";

export class UserDTO implements User {
    id: number
    firstName: string
    lastName: string
}