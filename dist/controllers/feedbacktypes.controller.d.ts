import { Count, Filter, Where } from '@loopback/repository';
import { Feedbacktypes } from '../models';
import { FeedbacktypesRepository } from '../repositories';
export declare class FeedbacktypesController {
    feedbacktypesRepository: FeedbacktypesRepository;
    constructor(feedbacktypesRepository: FeedbacktypesRepository);
    create(feedbacktypes: Omit<Feedbacktypes, 'id'>): Promise<Feedbacktypes>;
    count(where?: Where<Feedbacktypes>): Promise<Count>;
    find(filter?: Filter<Feedbacktypes>): Promise<Feedbacktypes[]>;
    updateAll(feedbacktypes: Feedbacktypes, where?: Where<Feedbacktypes>): Promise<Count>;
    findById(id: string, filter?: Filter<Feedbacktypes>): Promise<Feedbacktypes>;
    updateById(id: string, feedbacktypes: Feedbacktypes): Promise<void>;
    replaceById(id: string, feedbacktypes: Feedbacktypes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
