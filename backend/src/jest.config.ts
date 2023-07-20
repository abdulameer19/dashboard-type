export default {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "<rootDir>", // Set the root directory placeholder
  roots: ["<rootDir>/src"], // Update to the correct path to your source files
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
