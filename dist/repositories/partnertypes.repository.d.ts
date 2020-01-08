import { DefaultCrudRepository } from '@loopback/repository';
import { Partnertypes, PartnertypesRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class PartnertypesRepository extends DefaultCrudRepository<Partnertypes, typeof Partnertypes.prototype.id, PartnertypesRelations> {
    constructor(dataSource: KilloDataSource);
}
