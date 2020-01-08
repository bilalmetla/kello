import { Count, Filter, Where } from '@loopback/repository';
import { Activations } from '../models';
import { ActivationsRepository } from '../repositories';
export declare class ActivationsController {
    activationsRepository: ActivationsRepository;
    constructor(activationsRepository: ActivationsRepository);
    create(activations: Omit<Activations, 'id'>): Promise<Activations>;
    count(where?: Where<Activations>): Promise<Count>;
    find(filter?: Filter<Activations>): Promise<Activations[]>;
    updateAll(activations: Activations, where?: Where<Activations>): Promise<Count>;
    findById(id: string, filter?: Filter<Activations>): Promise<Activations>;
    updateById(id: string, activations: Activations): Promise<void>;
    replaceById(id: string, activations: Activations): Promise<void>;
    deleteById(id: string): Promise<void>;
}
