'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../src/rules/prefer-map')
const ruleTesterUtil = require('../testUtil/ruleTesterUtil')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = ruleTesterUtil.getRuleTester()
const {fromMessage, withDefaultPragma} = require('../testUtil/optionsUtil')
const toErrorObject = fromMessage('Prefer _.map over a _.forEach with a push to an array inside')
ruleTester.run('prefer-map', rule, {
    valid: [
        'var x = _.map(arr, function(x) {return x + 7})',
        '_.forEach(arr, function(x) { if (x.a) {a.push(x)}})',
        '_.forEach(arr, function (x){ a.push(x); if (f(x)) {a.push(b)}});',
        '_.forEach(xs, (x, i) => {x.push(y[i])})',
        '_.forEach(xs, ({x}) => {x.push(1)})'
    ].map(withDefaultPragma),
    invalid: [
        '_(arr).forEach(function(x) { a.push(x)})',
        '_(arr).forEach(function(x) { a.push(f(x))})',
        '_(arr).forEach(x => a.push(f(x)))'
    ].map(withDefaultPragma).concat([{
        code: 'import fe from "lodash/forEach"; fe(arr, x => {a.push(x)})',
        languageOptions: {
            sourceType: 'module'
        }
    }]).map(toErrorObject)
})
