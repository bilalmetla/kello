import { DefaultCrudRepository } from '@loopback/repository';
import { Configurations, ConfigurationsRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class ConfigurationsRepository extends DefaultCrudRepository<Configurations, typeof Configurations.prototype.id, ConfigurationsRelations> {
    constructor(dataSource: KilloDataSource);
}
