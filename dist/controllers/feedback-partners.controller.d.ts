import { Feedback, Partners } from '../models';
import { FeedbackRepository } from '../repositories';
export declare class FeedbackPartnersController {
    feedbackRepository: FeedbackRepository;
    constructor(feedbackRepository: FeedbackRepository);
    getPartners(id: typeof Feedback.prototype.id): Promise<Partners>;
}
