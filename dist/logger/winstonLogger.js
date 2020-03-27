"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const appRoot = __importStar(require("app-root-path"));
const winston = __importStar(require("winston"));
const DailyRotateFile = require("winston-daily-rotate-file");
const uuid = require("uuid");
let requestId = uuid.v4();
const logConfig = {
    filename: `${appRoot}/logs/debug.log`,
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "2g",
    maxFiles: "14d",
    level: "silly",
    json: true,
    colorize: false,
};
/**
 * Winston Logging Levels:
 *
 * 0: error
 * 1: warn
 * 2: info
 * 3: verbose
 * 4: debug
 * 5: silly
 *
 */
const logFormat = winston.format.json();
const infoWarnFilter = winston.format((info, opts) => {
    return info.level === "info" || info.level === "warn" ? info : false;
});
const debugWarnFilter = winston.format((info, opts) => {
    return info.level === "debug" ? info : false;
});
const sillyWarnFilter = winston.format((info, opts) => {
    return info.level === "silly" ? info : false;
});
const errorFilter = winston.format((info, opts) => {
    return info.level === "error" ? info : false;
});
const options = {
    infoLog: {
        name: "Info Logs",
        filename: logConfig.filename,
        datePattern: logConfig.datePattern,
        zippedArchive: logConfig.zippedArchive,
        maxSize: logConfig.maxSize,
        maxFiles: logConfig.maxFiles,
        level: logConfig.level,
        json: logConfig.json,
        colorize: false,
        format: winston.format.combine(infoWarnFilter(), winston.format.timestamp(), 
        //winston.format.label({ label: requestId }),
        logFormat)
    },
    debugLog: {
        name: "Debug Logs",
        filename: logConfig.filename,
        datePattern: logConfig.datePattern,
        zippedArchive: logConfig.zippedArchive,
        maxSize: logConfig.maxSize,
        maxFiles: logConfig.maxFiles,
        level: logConfig.level,
        json: logConfig.json,
        colorize: false,
        format: winston.format.combine(debugWarnFilter(), winston.format.timestamp(), 
        //winston.format.label({ label: requestId }),
        logFormat)
    },
    sillyLog: {
        name: "Silly Logs",
        filename: logConfig.filename,
        datePattern: logConfig.datePattern,
        zippedArchive: logConfig.zippedArchive,
        maxSize: logConfig.maxSize,
        maxFiles: logConfig.maxFiles,
        level: logConfig.level,
        json: logConfig.json,
        colorize: false,
        format: winston.format.combine(sillyWarnFilter(), winston.format.timestamp(), 
        ////winston.format.label({ label: requestId }),
        logFormat)
    },
    errorLog: {
        name: "Error Logs",
        filename: logConfig.filename,
        datePattern: logConfig.datePattern,
        zippedArchive: logConfig.zippedArchive,
        maxSize: logConfig.maxSize,
        maxFiles: logConfig.maxFiles,
        level: logConfig.level,
        json: logConfig.json,
        colorize: false,
        format: winston.format.combine(errorFilter(), winston.format.splat(), winston.format.simple(), logFormat)
    },
    console: {
        level: "error",
        handleExceptions: true,
        json: true,
        colorize: true
    }
};
const transports = [
    new DailyRotateFile(options.infoLog),
    new DailyRotateFile(options.debugLog),
    new DailyRotateFile(options.sillyLog),
    new DailyRotateFile(options.errorLog),
    new winston.transports.Console(options.console)
];
// Log unhandled exceptions to separate file
const exceptionHandlers = [
    new DailyRotateFile({
        filename: `${appRoot}/logs/exceptions.log`,
        datePattern: "YYYY-MM-DD",
        zippedArchive: false,
        maxSize: "2g",
        maxFiles: "14d"
    })
];
// instantiate the logger with custom options above.
const winstonLogger = winston.createLogger({
    transports,
    exceptionHandlers,
    exitOnError: false,
    // Default format
    format: winston.format.combine(winston.format.timestamp(), logFormat)
});
exports.winstonLogger = winstonLogger;
const GenerateRequestId = function () {
    return requestId = uuid.v4();
};
exports.GenerateRequestId = GenerateRequestId;
// export class WinstonLogger {
//   private _instance : any;
//   private constructor() {
//      this._instance = new winstonLogger();
//   }
//    get instance() {
//     return this._instance;
//   }
// }
// export const logger = WinstonLogger.instance;
//# sourceMappingURL=winstonLogger.js.map