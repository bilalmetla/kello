import { Count, Filter, Where } from '@loopback/repository';
import { Partners, Orders } from '../models';
import { PartnersRepository } from '../repositories';
export declare class PartnersOrdersController {
    protected partnersRepository: PartnersRepository;
    constructor(partnersRepository: PartnersRepository);
    find(id: string, filter?: Filter<Orders>): Promise<Orders[]>;
    create(id: typeof Partners.prototype.id, orders: Omit<Orders, 'id'>): Promise<Orders>;
    patch(id: string, orders: Partial<Orders>, where?: Where<Orders>): Promise<Count>;
    delete(id: string, where?: Where<Orders>): Promise<Count>;
}
