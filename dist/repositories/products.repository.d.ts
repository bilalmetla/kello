import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Products, ProductsRelations, Units, Producttypes } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UnitsRepository } from './units.repository';
import { ProducttypesRepository } from './producttypes.repository';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.id, ProductsRelations> {
    protected unitsRepositoryGetter: Getter<UnitsRepository>;
    protected producttypesRepositoryGetter: Getter<ProducttypesRepository>;
    readonly units: BelongsToAccessor<Units, typeof Products.prototype.id>;
    readonly producttypes: BelongsToAccessor<Producttypes, typeof Products.prototype.id>;
    constructor(dataSource: KilloDataSource, unitsRepositoryGetter: Getter<UnitsRepository>, producttypesRepositoryGetter: Getter<ProducttypesRepository>);
}
