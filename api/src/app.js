const express = require('express');

const { ApolloServer } = require('apollo-server-express');
const ExpressPlayground = require('graphql-playground-middleware-express').default;

const mongoose = require('mongoose');

const schema = require('./schema');
const resolvers = require('./resolvers');

const APP_PORT = 4000;
const app = express();
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app });
app.get('/playground', ExpressPlayground({ endpoint: '/graphql' }));

// mongodb://<host>:<port>@<user>:<password>/<database>
mongoose.connect(`mongodb://localhost/dbcea`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(APP_PORT, () => {
        console.log(`Connected to MongoDB successfully`);
        console.log(`GraphQL API is listening on localhost:${APP_PORT}/graphql`);
    });
}).catch(err => {
    throw err;
});
