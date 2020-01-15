import { Products, Producttypes } from '../models';
import { ProductsRepository } from '../repositories';
export declare class ProductsProducttypesController {
    productsRepository: ProductsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducttypes(id: typeof Products.prototype.id): Promise<Producttypes>;
}
