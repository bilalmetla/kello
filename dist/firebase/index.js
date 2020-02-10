"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase-admin");
const serviceAccount = require('./kello-414db-firebase-adminsdk-oqpmj-c6ccf08fda.json');
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
class Firebase {
    constructor() {
        firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
    }
    sendNotification(deviceToken, payload) {
        const options = {
        //priority: 'normal',            
        //timeToLive: 60 * 60 * 24, // 1 day
        };
        firebase
            .messaging()
            .sendToDevice(deviceToken, payload, options)
            .then((response) => {
            // Response is a message ID string.
            console.log(`sendNotification to ${deviceToken} | Successfully sent message:`, response);
        })
            .catch((error) => {
            console.error(`sendNotification to ${deviceToken} | Error sending message:`, error);
        });
    }
    sendNotificationToMany(registrationTokens, payload) {
        payload.tokens = registrationTokens;
        firebase.messaging().sendMulticast(payload)
            .then((response) => {
            if (response.failureCount > 0) {
                const failedTokens = [];
                response.responses.forEach((resp, idx) => {
                    if (!resp.success) {
                        failedTokens.push(registrationTokens[idx]);
                    }
                });
                console.log('sendNotificationToMany | List of tokens that caused failures: ' + failedTokens);
            }
        })
            .catch((error) => {
            console.error('sendNotificationToMany | Error sending message:', error);
        });
    }
}
exports.Firebase = Firebase;
//# sourceMappingURL=index.js.map