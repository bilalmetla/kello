import { DefaultCrudRepository } from '@loopback/repository';
import { Promotiontype, PromotiontypeRelations } from '../models';
import { KilloDataSource } from '../datasources';
export declare class PromotiontypeRepository extends DefaultCrudRepository<Promotiontype, typeof Promotiontype.prototype.id, PromotiontypeRelations> {
    constructor(dataSource: KilloDataSource);
}
