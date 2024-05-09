'use strict'
const {RuleTester} = require('eslint')

const baseOptions = {
    languageOptions: {parserOptions: {ecmaVersion: 6}}
}

/**
 * Gets a rule tester configured for ecmaVersion 6
 * @param {Object?} options
 * @returns {*}
 */
const getRuleTester = (options = {}) => new RuleTester(Object.assign(baseOptions, options))

module.exports = {getRuleTester}
