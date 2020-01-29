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
class Transaction {
    constructor(model) {
        this.Model = model;
        this.isInTransation = false;
    }
    start() {
        let self = this;
        let connector = self.Model.dataSource.connector;
        console.log(`Transaction start connector : ${connector}`);
        if (connector.name !== 'mongodb') {
            throw new Error('Only support mongodb database transaction');
        }
        else {
            if (!self.isInTransation) {
                self.session = connector.client.startSession();
                console.log(`Transaction started : ${self.session}`);
                self.session.startTransaction();
                self.isInTransation = true;
            }
            return self.session;
        }
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            console.log(`Transaction commit : ${self}`);
            if (self.isInTransation) {
                yield self.session.commitTransaction();
                self.session.endSession();
                self.isInTransation = false;
            }
        });
    }
    rollback() {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            console.log(`Transaction rollback : ${self}`);
            if (self.isInTransation) {
                yield self.session.abortTransaction();
                self.session.endSession();
                self.isInTransation = false;
            }
        });
    }
}
exports.Transaction = Transaction;
//end of Transaction class
//# sourceMappingURL=transaction.js.map