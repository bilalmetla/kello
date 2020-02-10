"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class CONSTANTS {
}
exports.CONSTANTS = CONSTANTS;
CONSTANTS.SYSTEM_ERROR = { error: new models_1.ErrorResponse({ statusCode: 500, name: "Internal Server Error", code: "SYSTEM_ERROR", message: "System Error!" }) };
CONSTANTS.ACTIVATION_FAILED = { error: new models_1.ErrorResponse({ statusCode: 403, name: "Forbidden", code: "ACTIVATION_FAILED", message: "Activation Failed!" }) };
CONSTANTS.HAWKER_NOT_AVAILABLE = { error: new models_1.ErrorResponse({ statusCode: 404, name: "Not Found", code: "HAWKER_NOT_AVAILABLE", message: "No Hawker Availabe!" }) };
CONSTANTS.ORDER_NOT_PLACED = { error: new models_1.ErrorResponse({ statusCode: 422, name: "Unprocessable Entity", code: "ORDER_NOT_PLACED", message: "Order Not Placed, Try Again!" }) };
CONSTANTS.AUTHNETICATION_FAILED = { error: new models_1.ErrorResponse({ statusCode: 404, name: "Not Found", code: "AUTHNETICATION_FAILED", message: "Authentication Failed!" }) };
CONSTANTS.PRODUCT_NOT_FOUND = { error: new models_1.ErrorResponse({ statusCode: 404, name: "Not Found", code: "PRODUCT_NOT_FOUND", message: "Product Not Found For This Supply" }) };
CONSTANTS.NO_SUPPLY_EXISTS = { error: new models_1.ErrorResponse({ statusCode: 404, name: "Not Found", code: "NO_SUPPLY_EXISTS", message: "Supply Not Found!" }) };
CONSTANTS.ORDER_DETAILS_NOT_CREATED = { error: new models_1.ErrorResponse({ statusCode: 204, name: "No Content", code: "ORDER_DETAILS_NOT_CREATED", message: "Order Detail Not Created!" }) };
CONSTANTS.PRODUCT_NOT_UPDATED = { error: new models_1.ErrorResponse({ statusCode: 403, name: "Forbidden", code: "PRODUCT_NOT_UPDATED", message: "Product Not Updated!" }) };
CONSTANTS.PRICEPLAN_NOT_FOUND = { error: new models_1.ErrorResponse({ statusCode: 404, name: "Not Found", code: "PRICEPLAN_NOT_FOUND", message: "PricePlan Not Found!" }) };
CONSTANTS.PEOMOTION_NOT_FOUND = { error: new models_1.ErrorResponse({ statusCode: 404, name: "Not Found", code: "PEOMOTION_NOT_FOUND", message: "Promotion Not Found!" }) };
CONSTANTS.INVALID_PHONE_NUMBER = { error: new models_1.ErrorResponse({ statusCode: 400, name: "Bad Request", code: "INVALID_PHONE_NUMBER", message: "Phone Number Is Invalid!" }) };
//# sourceMappingURL=index.js.map