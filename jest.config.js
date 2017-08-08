module.exports = {
    "collectCoverageFrom": ['src/**/*.js'],
    "testMatch": ['**/tests/**/*.spec.js'],
    "testPathIgnorePatterns": [
        '/node_modules/',
        '/dist/'
    ],
    "transform": {
        ".*": "./node_modules/babel-jest"
    }
};