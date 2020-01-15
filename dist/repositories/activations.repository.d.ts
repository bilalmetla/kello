import { DefaultCrudRepository } from '@loopback/repository';
import { Activations, ActivationsRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class ActivationsRepository extends DefaultCrudRepository<Activations, typeof Activations.prototype.id, ActivationsRelations> {
    constructor(dataSource: KilloDataSource);
}
