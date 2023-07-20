"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: "<rootDir>",
    roots: ["<rootDir>/src"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
