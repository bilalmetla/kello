import { Filter } from '@loopback/repository';
import { Products } from '../models';
import { ProductsRepository } from '../repositories';
export declare class ShoppingController {
    productsRepository: ProductsRepository;
    constructor(productsRepository: ProductsRepository);
    find(filter?: Filter<Products>): Promise<Products[]>;
    findByProductTypeId(producttypesId: string): Promise<Products[]>;
}
