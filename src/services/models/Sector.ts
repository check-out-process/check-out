import { User } from '@checkout/types';

export type Sector = {
    id: string;
    name: string;
    defaultResponsibleUser: User;
    responsibleUsers: User[];
    committingUsers: User[];
}