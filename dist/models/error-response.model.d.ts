import { Entity } from '@loopback/repository';
export declare class ErrorResponse extends Entity {
    message?: string;
    statusCode?: string;
    constructor(data?: Partial<ErrorResponse>);
}
export interface ErrorResponseRelations {
}
export declare type ErrorResponseWithRelations = ErrorResponse & ErrorResponseRelations;
