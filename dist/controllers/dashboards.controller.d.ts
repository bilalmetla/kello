import { CustomersRepository, FeedbackRepository, OrdersRepository } from '../repositories';
export declare class DashboardsController {
    customersRepository: CustomersRepository;
    feedbackRepository: FeedbackRepository;
    ordersRepository: OrdersRepository;
    constructor(customersRepository: CustomersRepository, feedbackRepository: FeedbackRepository, ordersRepository: OrdersRepository);
    getStats(): Promise<any>;
}
