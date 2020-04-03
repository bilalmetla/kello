import { Entity } from '@loopback/repository';
export declare class Configurations extends Entity {
    id?: string;
    androidAppVersion?: string;
    sms_username?: string;
    sms_password?: string;
    isProductionInstance?: boolean;
    storeDeviceToken?: string;
    constructor(data?: Partial<Configurations>);
}
export interface ConfigurationsRelations {
}
export declare type ConfigurationsWithRelations = Configurations & ConfigurationsRelations;
