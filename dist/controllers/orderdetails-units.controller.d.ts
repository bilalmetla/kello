import { Orderdetails, Units } from '../models';
import { OrderdetailsRepository } from '../repositories';
export declare class OrderdetailsUnitsController {
    orderdetailsRepository: OrderdetailsRepository;
    constructor(orderdetailsRepository: OrderdetailsRepository);
    getUnits(id: typeof Orderdetails.prototype.id): Promise<Units>;
}
