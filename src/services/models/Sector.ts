import { User } from '@checkout/types';

export type Sector = {
    id: string;
    name: string;
    defaultResponsibleUser?: User;
    defaultCommittingUser?: User;
    responsibleUsers?: User[];
    committingUsers: User[];
}