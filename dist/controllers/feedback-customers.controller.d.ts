import { Feedback, Customers } from '../models';
import { FeedbackRepository } from '../repositories';
export declare class FeedbackCustomersController {
    feedbackRepository: FeedbackRepository;
    constructor(feedbackRepository: FeedbackRepository);
    getCustomers(id: typeof Feedback.prototype.id): Promise<Customers>;
}
