import { Count, Filter, Where } from '@loopback/repository';
import { RatingReasons } from '../models';
import { RatingReasonsRepository } from '../repositories';
export declare class RatingReasonsController {
    ratingReasonsRepository: RatingReasonsRepository;
    constructor(ratingReasonsRepository: RatingReasonsRepository);
    create(ratingReasons: Omit<RatingReasons, 'id'>): Promise<RatingReasons>;
    count(where?: Where<RatingReasons>): Promise<Count>;
    find(filter?: Filter<RatingReasons>): Promise<RatingReasons[]>;
    updateAll(ratingReasons: RatingReasons, where?: Where<RatingReasons>): Promise<Count>;
    findById(id: string, filter?: Filter<RatingReasons>): Promise<RatingReasons>;
    updateById(id: string, ratingReasons: RatingReasons): Promise<void>;
    replaceById(id: string, ratingReasons: RatingReasons): Promise<void>;
    deleteById(id: string): Promise<void>;
}
