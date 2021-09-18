const { buildSchema } = require("graphql");

module.exports = buildSchema(`
	type QandA {
		_id: ID!
		question: String!
		answers: [String!]!
	}
	type Query {
		getAllQandA: [QandA!]!
		getQandA(_id: ID!): QandA!
	}
	type Mutation {
		addQandA(question: String!, answers: [String!]!): QandA!
		updateQandA(_id: ID!, question: String!, answers: [String!]!): QandA!
		deleteQandA(_id: ID!): QandA!
	}`
);
