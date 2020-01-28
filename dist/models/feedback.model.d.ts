import { Entity } from '@loopback/repository';
export declare class Feedback extends Entity {
    id?: string;
    email?: string;
    fullname: string;
    phone: string;
    message: string;
    isReviewed: boolean;
    createdDate?: Date;
    customersId: string;
    feedbacktypesId: string;
    partnersId: string;
    reviewedById: string;
    [prop: string]: any;
    constructor(data?: Partial<Feedback>);
}
export interface FeedbackRelations {
}
export declare type FeedbackWithRelations = Feedback & FeedbackRelations;
