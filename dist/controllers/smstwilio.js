"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = require('twilio');
class SMS {
    constructor() {
        // Download the helper library from https://www.twilio.com/docs/node/install
        // Your Account Sid and Auth Token from twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        this.accountSid = 'ACeccf074eced9ed0be6a11fba3295228d';
        this.authToken = 'your_auth_token';
    }
}
exports.SMS = SMS;
let client = new client(accountSid, authToken);
client.messages
    .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+15017122661',
    to: '+15558675310'
})
    .then(message => console.log(message.sid));
//# sourceMappingURL=smstwilio.js.map