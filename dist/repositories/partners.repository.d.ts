import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Partners, PartnersRelations, Partnertypes } from '../models';
import { KilloDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { PartnertypesRepository } from './partnertypes.repository';
export declare class PartnersRepository extends DefaultCrudRepository<Partners, typeof Partners.prototype.id, PartnersRelations> {
    protected partnertypesRepositoryGetter: Getter<PartnertypesRepository>;
    readonly partnertypes: BelongsToAccessor<Partnertypes, typeof Partners.prototype.id>;
    constructor(dataSource: KilloDataSource, partnertypesRepositoryGetter: Getter<PartnertypesRepository>);
}
