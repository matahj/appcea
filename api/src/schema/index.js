const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        status: String
        rooms: [Room]
        resources: [Resource]
        users: [User]
        groups: [Group]
    }

    type Group {
        _id: ID!
        code: String!
        language: String!
        semester: String!
        teachers: [ID]
        students: [ID]
    }

    type User {
        _id: ID!
        account: String!
        name: String!
        email: String!
        role: String!
        password: String!
        group: ID
    }

    type Resource{
        _id: ID!
        code: String!
        name: String!
        description: String
        room: ID!
    }

    type Room {
        _id: ID!
        code: String!
        name: String!
        description: String
    }
`;

module.exports = typeDefs;