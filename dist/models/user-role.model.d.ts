import { Entity } from '@loopback/repository';
export declare class UserRole extends Entity {
    id?: string;
    userId: string;
    roleId: string;
    constructor(data?: Partial<UserRole>);
}
export interface UserRoleRelations {
}
export declare type UserRoleWithRelations = UserRole & UserRoleRelations;
