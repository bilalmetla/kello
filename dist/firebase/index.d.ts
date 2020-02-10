/**
 * Message options
 *   type MessagingOptions = {
  
  dryRun?: boolean;
  
  priority?: string; // normal or high
  
  timeToLive?: number; // in second
  
  collapseKey?: string;
  
  mutableContent?: boolean;
  
  contentAvailable?: boolean;
  
  restrictedPackageName?: string;
  
  [key: string]: any | undefined;
  
};
 */
export declare class Firebase {
    constructor();
    sendNotification(deviceToken: string, payload: object): void;
    sendNotificationToMany(registrationTokens: any, payload: any): void;
}
