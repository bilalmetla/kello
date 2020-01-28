import { Count, Filter, Where } from '@loopback/repository';
import { Supply } from '../models';
import { SupplyRepository, ProductsRepository } from '../repositories';
export declare class SupplyController {
    supplyRepository: SupplyRepository;
    productsRepository: ProductsRepository;
    constructor(supplyRepository: SupplyRepository, productsRepository: ProductsRepository);
    create(supply: Omit<Supply, 'id'>): Promise<Supply>;
    count(where?: Where<Supply>): Promise<Count>;
    find(filter?: Filter<Supply>): Promise<Supply[]>;
    updateAll(supply: Supply, where?: Where<Supply>): Promise<Count>;
    findById(id: string, filter?: Filter<Supply>): Promise<Supply>;
    updateById(id: string, supply: Supply): Promise<void>;
    replaceById(id: string, supply: Supply): Promise<void>;
    deleteById(id: string): Promise<void>;
    supplyArrived(id: string): Promise<object>;
}
