import { OrderRatings, RatingReasons } from '../models';
import { OrderRatingsRepository } from '../repositories';
export declare class OrderRatingsRatingReasonsController {
    orderRatingsRepository: OrderRatingsRepository;
    constructor(orderRatingsRepository: OrderRatingsRepository);
    getRatingReasons(id: typeof OrderRatings.prototype.id): Promise<RatingReasons>;
}
