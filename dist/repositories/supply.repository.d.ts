import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Supply, SupplyRelations, Partners, Products, Units } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { PartnersRepository } from './partners.repository';
import { ProductsRepository } from './products.repository';
import { UnitsRepository } from './units.repository';
export declare class SupplyRepository extends DefaultCrudRepository<Supply, typeof Supply.prototype.id, SupplyRelations> {
    protected partnersRepositoryGetter: Getter<PartnersRepository>;
    protected productsRepositoryGetter: Getter<ProductsRepository>;
    protected unitsRepositoryGetter: Getter<UnitsRepository>;
    readonly partners: BelongsToAccessor<Partners, typeof Supply.prototype.id>;
    readonly products: BelongsToAccessor<Products, typeof Supply.prototype.id>;
    readonly units: BelongsToAccessor<Units, typeof Supply.prototype.id>;
    constructor(dataSource: KilloDataSource, partnersRepositoryGetter: Getter<PartnersRepository>, productsRepositoryGetter: Getter<ProductsRepository>, unitsRepositoryGetter: Getter<UnitsRepository>);
}
