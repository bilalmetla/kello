import { Partners, Partnertypes } from '../models';
import { PartnersRepository } from '../repositories';
export declare class PartnersPartnertypesController {
    partnersRepository: PartnersRepository;
    constructor(partnersRepository: PartnersRepository);
    getPartnertypes(id: typeof Partners.prototype.id): Promise<Partnertypes>;
}
