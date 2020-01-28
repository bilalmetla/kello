import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    username: string;
    password?: string;
    access_token?: string;
    name?: string;
    email?: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
