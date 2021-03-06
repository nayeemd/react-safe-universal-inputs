/* eslint strict:off, global-require:off */

'use strict';

module.exports = {
    roots: ['<rootDir>/src/'],
    moduleFileExtensions: ['js'],
    moduleDirectories: ['node_modules', 'src'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    verbose: false,
};
