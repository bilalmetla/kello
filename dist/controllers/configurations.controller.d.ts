import { Count, Filter, Where } from '@loopback/repository';
import { Configurations } from '../models';
import { ConfigurationsRepository } from '../repositories';
export declare class ConfigurationsController {
    configurationsRepository: ConfigurationsRepository;
    constructor(configurationsRepository: ConfigurationsRepository);
    create(configurations: Omit<Configurations, 'id'>): Promise<Configurations>;
    count(where?: Where<Configurations>): Promise<Count>;
    find(filter?: Filter<Configurations>): Promise<Configurations[]>;
    updateAll(configurations: Configurations, where?: Where<Configurations>): Promise<Count>;
    findById(id: string, filter?: Filter<Configurations>): Promise<Configurations>;
    updateById(id: string, configurations: Configurations): Promise<void>;
    replaceById(id: string, configurations: Configurations): Promise<void>;
    deleteById(id: string): Promise<void>;
}
