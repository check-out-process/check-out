export type User = {
    id: number
    fullname: string,
    username: string,
    job?: number,
    role: UserRole;
}

export class UserRole {
    id: string;
    name: string;
}

export enum Role {
    Worker = 'עובד',
    Process_Executer = 'אחמ"ש',
    Admin = 'מנהל'
}
