const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        status: String
        rooms: [Room]
        resources: [Resource]
        users: [User]
        groups: [Group]
        registers: [Registry]
        activities: [Activity]
    }

    type Mutation {
        createRoom(input: InputCreateRoom!): Room
        createResource(input: InputCreateResource!): Resource
        createUser(input: InputCreateUser!): User
        createGroup(input: InputCreateGroup!): Group
        createRegistry(input: InputCreateRegistry!): Registry
        createActivity(input: InputCreateActivity!): Activity
    }

    input InputCreateActivity {
        user: ID!
        tIni: String!
        tFin: String
        active: Boolean!
    }
    type Activity {
        _id: ID!
        user: ID!
        tIni: String!
        tFin: String
        active: Boolean!
    }

    input InputCreateRegistry{
        user: ID!
        room: ID!
        resource: ID!
        tIni: String!
        tFin: String
        comment: String
    }
    type Registry{
        _id: ID!
        user: ID!
        room: ID!
        resource: ID!
        tIni: String!
        tFin: String
        comment: String
    }

    input InputCreateGroup {
        code: String!
        language: String!
        semester: String!
        teachers: [ID]
        students: [ID]
    }
    type Group {
        _id: ID!
        code: String!
        language: String!
        semester: String!
        teachers: [ID]
        students: [ID]
    }

    input InputCreateUser {
        account: String!
        name: String!
        email: String!
        role: String!
        password: String!
        group: ID
        enroll: Boolean!
    }
    type User {
        _id: ID!
        account: String!
        name: String!
        email: String!
        role: String!
        # password: String!
        group: ID,
        enroll: Boolean!,
    }

    input InputCreateResource{
        code: Int!
        name: String!
        description: String
        room: ID!
    }
    type Resource{
        _id: ID!
        code: Int!
        name: String!
        description: String
        room: ID!
    }

    input InputCreateRoom {
        code: String!
        name: String!
        description: String
    }    
    type Room {
        _id: ID!
        code: String!
        name: String!
        description: String
    }
`;

module.exports = typeDefs;