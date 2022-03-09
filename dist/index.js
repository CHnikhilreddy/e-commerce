"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const microconfig_1 = __importDefault(require("./microconfig"));
const main = async () => {
    try {
        await (0, typeorm_1.createConnection)(microconfig_1.default);
        console.log("connected to the DB");
    }
    catch (e) {
        console.log('got an error');
        console.log(e);
    }
};
main();
//# sourceMappingURL=index.js.map