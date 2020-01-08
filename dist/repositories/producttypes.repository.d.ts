import { DefaultCrudRepository } from '@loopback/repository';
import { Producttypes, ProducttypesRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class ProducttypesRepository extends DefaultCrudRepository<Producttypes, typeof Producttypes.prototype.id, ProducttypesRelations> {
    constructor(dataSource: KilloDataSource);
}
