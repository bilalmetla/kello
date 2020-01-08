import { Count, Filter, Where } from '@loopback/repository';
import { Units } from '../models';
import { UnitsRepository } from '../repositories';
export declare class UnitsController {
    unitsRepository: UnitsRepository;
    constructor(unitsRepository: UnitsRepository);
    create(units: Omit<Units, 'id'>): Promise<Units>;
    count(where?: Where<Units>): Promise<Count>;
    find(filter?: Filter<Units>): Promise<Units[]>;
    updateAll(units: Units, where?: Where<Units>): Promise<Count>;
    findById(id: string, filter?: Filter<Units>): Promise<Units>;
    updateById(id: string, units: Units): Promise<void>;
    replaceById(id: string, units: Units): Promise<void>;
    deleteById(id: string): Promise<void>;
}
