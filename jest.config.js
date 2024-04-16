/** @type {import('jest').Config} */
const config = {
    collectCoverage: true,

    collectCoverageFrom: ['src/**/*.{js, jsx}'],

    testEnvironment: 'jsdom',

    setupFilesAfterEnv: ['<rootDir>/internal/jest.setup.js'],

    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },

    moduleFileExtensions: ['js', 'jsx']
  };
  
  export default config;