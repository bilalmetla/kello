import { Count, Filter, Where } from '@loopback/repository';
import { Stock } from '../models';
import { StockRepository } from '../repositories';
export declare class StocksController {
    stockRepository: StockRepository;
    constructor(stockRepository: StockRepository);
    create(stock: Omit<Stock, 'id'>): Promise<Stock>;
    count(where?: Where<Stock>): Promise<Count>;
    find(filter?: Filter<Stock>): Promise<Stock[]>;
    updateAll(stock: Stock, where?: Where<Stock>): Promise<Count>;
    findById(id: string, filter?: Filter<Stock>): Promise<Stock>;
    updateById(id: string, stock: Stock): Promise<void>;
    replaceById(id: string, stock: Stock): Promise<void>;
    deleteById(id: string): Promise<void>;
}
