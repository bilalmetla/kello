import { Count, Filter, Where } from '@loopback/repository';
import { Promotiontype } from '../models';
import { PromotiontypeRepository } from '../repositories';
export declare class PromotiontypeController {
    promotiontypeRepository: PromotiontypeRepository;
    constructor(promotiontypeRepository: PromotiontypeRepository);
    create(promotiontype: Omit<Promotiontype, 'id'>): Promise<Promotiontype>;
    count(where?: Where<Promotiontype>): Promise<Count>;
    find(filter?: Filter<Promotiontype>): Promise<Promotiontype[]>;
    updateAll(promotiontype: Promotiontype, where?: Where<Promotiontype>): Promise<Count>;
    findById(id: string, filter?: Filter<Promotiontype>): Promise<Promotiontype>;
    updateById(id: string, promotiontype: Promotiontype): Promise<void>;
    replaceById(id: string, promotiontype: Promotiontype): Promise<void>;
    deleteById(id: string): Promise<void>;
}
