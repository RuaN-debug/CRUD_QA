const authResolver = require('./authCheck');
const questionsResolver = require('./resolvers');

module.exports = {
    ...authResolver,
    ...questionsResolver
}