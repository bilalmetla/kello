import { Stock, Products } from '../models';
import { StockRepository } from '../repositories';
export declare class StockProductsController {
    stockRepository: StockRepository;
    constructor(stockRepository: StockRepository);
    getProducts(id: typeof Stock.prototype.id): Promise<Products>;
}
