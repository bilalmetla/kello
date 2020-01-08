import { Feedback, Feedbacktypes } from '../models';
import { FeedbackRepository } from '../repositories';
export declare class FeedbackFeedbacktypesController {
    feedbackRepository: FeedbackRepository;
    constructor(feedbackRepository: FeedbackRepository);
    getFeedbacktypes(id: typeof Feedback.prototype.id): Promise<Feedbacktypes>;
}
