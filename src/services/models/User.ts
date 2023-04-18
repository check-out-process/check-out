export type User = {
    id: number
    fullname: string,
    username: string,
    job?: number,
    role: Role;
}

export enum Role {
    Viewer = 0,
    Worker = 1,
    Process_Executer = 2,
    Admin = 3
}
