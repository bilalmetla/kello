"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require('https');
class SendPk {
    constructor() { }
    sendOTP(OTP, receiverMobile) {
        try {
            let username = 923136604801;
            let password = 'sendpk@1991';
            let mobile = parseInt(receiverMobile);
            let message = 'Your Kello Store Activation OTP Code: ' + OTP;
            let url = `https://sendpk.com/api/sms.php?username=${username}&password=${password}&sender=BrandName&mobile=${mobile}&message=${message}`;
            https.get(url, function (response) {
                response.setEncoding('utf8');
                response.on('data', console.log);
                response.on('error', console.error);
            });
        }
        catch (ex) {
            console.error('send otp sms exception', ex);
        }
    }
}
exports.SendPk = SendPk;
//# sourceMappingURL=sendpk.js.map