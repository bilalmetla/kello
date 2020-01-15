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
const __1 = require("../..");
const testlab_1 = require("@loopback/testlab");
function setupApplication() {
    return __awaiter(this, void 0, void 0, function* () {
        const restConfig = testlab_1.givenHttpServerConfig({
        // Customize the server configuration here.
        // Empty values (undefined, '') will be ignored by the helper.
        //
        // host: process.env.HOST,
        // port: +process.env.PORT,
        });
        const app = new __1.Kello({
            rest: restConfig,
        });
        yield app.boot();
        yield app.start();
        const client = testlab_1.createRestAppClient(app);
        return { app, client };
    });
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map