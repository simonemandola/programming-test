module.exports = {
  "testEnvironment": "jsdom",
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/resources/$1',
  },
  testMatch: [
    '**/tests/js/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)',
  ],
  transformIgnorePatterns: ['node_modules/(?!(.*\\.js$))'],
  "moduleFileExtensions": ["js", "json", "vue"],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  }
};
