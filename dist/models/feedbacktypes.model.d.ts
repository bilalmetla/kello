import { Entity } from '@loopback/repository';
export declare class Feedbacktypes extends Entity {
    id?: string;
    typeName: string;
    [prop: string]: any;
    constructor(data?: Partial<Feedbacktypes>);
}
export interface FeedbacktypesRelations {
}
export declare type FeedbacktypesWithRelations = Feedbacktypes & FeedbacktypesRelations;
