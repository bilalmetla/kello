"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_server_1 = require("./socket.server");
let app = new socket_server_1.ChatServer().getApp();
exports.app = app;
//# sourceMappingURL=index.js.map