'use strict'
const _ = require('lodash')

const fromMessage = message => fromOptions({errors: [{message}]});

const fromMessageId = messageId => fromOptions({errors: [{messageId}]});

function fromOptions(options) {
    return testCase => _.isString(testCase) ? _.assign({code: testCase}, options) : _.defaultsDeep(testCase, options)
}

module.exports = {
    fromMessage,
    fromMessageId,
    fromVersion3: fromOptions({settings: {lodash: {version: 3}}}),
    fromVersion3WithDefaultPragma: fromOptions({settings: {lodash: {version: 3, pragma: '_'}}}),
    fromOptions,
    withDefaultPragma: fromOptions({settings: {lodash: {pragma: '_'}}})
}