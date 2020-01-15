import { Stock, Units } from '../models';
import { StockRepository } from '../repositories';
export declare class StockUnitsController {
    stockRepository: StockRepository;
    constructor(stockRepository: StockRepository);
    getUnits(id: typeof Stock.prototype.id): Promise<Units>;
}
