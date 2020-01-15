import { Products, Units } from '../models';
import { ProductsRepository } from '../repositories';
export declare class ProductsUnitsController {
    productsRepository: ProductsRepository;
    constructor(productsRepository: ProductsRepository);
    getUnits(id: typeof Products.prototype.id): Promise<Units>;
}
