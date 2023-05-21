import { User } from "./User";

export type Sector = {
    id: string;
    name: string;
    defaultResponsibleUser?: User;
    defaultCommittingUser?: User;
    responsibleUsers?: User[];
    committingUsers: User[];
}