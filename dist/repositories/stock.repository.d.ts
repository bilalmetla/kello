import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Stock, StockRelations, Products, Units } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { ProductsRepository } from './products.repository';
import { UnitsRepository } from './units.repository';
export declare class StockRepository extends DefaultCrudRepository<Stock, typeof Stock.prototype.id, StockRelations> {
    protected productsRepositoryGetter: Getter<ProductsRepository>;
    protected unitsRepositoryGetter: Getter<UnitsRepository>;
    readonly products: BelongsToAccessor<Products, typeof Stock.prototype.id>;
    readonly units: BelongsToAccessor<Units, typeof Stock.prototype.id>;
    constructor(dataSource: KilloDataSource, productsRepositoryGetter: Getter<ProductsRepository>, unitsRepositoryGetter: Getter<UnitsRepository>);
}
