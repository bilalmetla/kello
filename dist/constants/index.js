"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class CONSTANTS {
}
exports.CONSTANTS = CONSTANTS;
CONSTANTS.ACTIVATION_FAILED = new models_1.ErrorResponse({ statusCode: "ER220", message: "Activation Failed!" });
CONSTANTS.HAWKER_NOT_AVAILABLE = new models_1.ErrorResponse({ statusCode: "ER221", message: "No Hawker Availabe!" });
CONSTANTS.ORDER_NOT_PLACED = new models_1.ErrorResponse({ statusCode: "ER222", message: "Order Not Placed, Try Again!" });
CONSTANTS.AUTHNETICATION_FAILED = new models_1.ErrorResponse({ statusCode: "ER223", message: "Authentication Failed!" });
//# sourceMappingURL=index.js.map