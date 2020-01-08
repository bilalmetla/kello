"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.Kello = application_1.Kello;
function main(options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new application_1.Kello(options);
        yield app.boot();
        yield app.start();
        const url = app.restServer.url;
        console.log(`Server is running at ${url}`);
        console.log(`Try ${url}/ping`);
        return app;
    });
}
exports.main = main;
//# sourceMappingURL=index.js.map