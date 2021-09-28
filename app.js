const graphQlResolvers = require('./graphql/resolvers/merge');
const graphqlHttp = require('express-graphql').graphqlHTTP;
const isAuth = require('./graphql/authorization/isAuth');
const graphQlSchema = require("./graphql/schema/schema");
const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS'); // Browser sends OPTIONS before a POST or GET
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200); // Allows navigator to send GET or POST after the OPTIONS
    }
    next();
});
app.use(isAuth);

app.use('/graphql', graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true, // Interface to run tests
    pretty: true
}));

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.rsu5c.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
).then(() => {
    app.listen(8000); // App's port
}).catch(err => {
    console.log(err);
});

console.log(`Server ready at http://localhost:8000/graphql`);