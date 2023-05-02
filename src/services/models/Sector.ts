import { User } from "./User";

export type Sector = {
    id: string;
    name: string;
    defaultResponsibleUser: User;
    responsibleUsers: User[];
    committingUsers: User[];
}