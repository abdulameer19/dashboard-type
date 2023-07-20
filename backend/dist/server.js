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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const mongoose_1 = __importDefault(require("mongoose"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(`${process.env.MONGO_URI}`);
        console.log(`🚀 Connected to Mongo at ${process.env.MONGO_URI}`);
        const server = new server_1.ApolloServer({
            typeDefs: typeDefs_1.default,
            resolvers: resolvers_1.default,
            introspection: true, // enables introspection of the schema
        });
        const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
            listen: { port: 4000 },
        });
        console.log(`🚀 Server ready at ${url}`);
    });
}
startServer();
