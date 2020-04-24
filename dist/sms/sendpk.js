"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require('https');
class SendPk {
    constructor() { }
    //https://sendpk.com/api/sms.php?username=923136604801&password=sendpk@1991&sender=BrandName&mobile=923136604801,923015339780&message=Ramdhan Mubarak\n In Ramdhan our delivery time will start from 12:00pm to 5:00pm. Please try to place your order as early as possible. Regards kellostore
    sendOTP(OTP, receiverMobile) {
        try {
            let username = 923136604801;
            let password = 'sendpk@1991';
            let mobile = parseInt(receiverMobile);
            let message = 'Your Kellostore Activation OTP Code: ' + OTP;
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