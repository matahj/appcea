const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    status: String
    rooms: [Room]
    resources: [Resource]
    users: [User]
    groups: [Group]
    records: [Record]
    activities: [Activity]

    userId(id: ID!): User
    userAccount(account: String!): User

    groupId(id: ID!): Group
    groupCode(code: String!) : Group
  }

  type Mutation {
    createRoom(input: InputCreateRoom!): Room
    createResource(input: InputCreateResource!): Resource
    createUser(input: InputCreateUser!): User
    createGroup(input: InputCreateGroup!): Group
    createRecord(input: InputCreateRecord!): Record
    createActivity(input: InputCreateActivity!): Activity
  }

  type Room {
    _id: ID
    code: String
    name: String
    description: String
  }

  type Resource{
    _id: ID
    room: ID
    description: String
  }

  type User {
    _id: ID
    account: String
    name: String
    email: String
    role: String
    password: String
    group: ID
  }

  type Group {
    _id: ID
    code: String
    language: String
    semester: String
    teachers: [ID]
    students: [ID]
  }

  type Record {
    _id: ID
    user: ID
    room: ID
    resource: ID
    tIni: String
    tFin: String
    comment: String
  }

  type Activity {
    _id: ID
    user: ID
    tIni: String
    tFin: String
  }

  input InputCreateRoom {
    code: String!
    name: String!
    description: String
  }

  input InputCreateResource{
    room: ID!
    description: String!
  }

  input InputCreateUser {
    account: String!
    name: String!
    email: String!
    role: String!
    password: String!
    group: ID
  }

  input InputCreateGroup {
    code: String!
    language: String!
    semester: String!
    teachers: [ID]
    students: [ID]
  }

  input InputCreateRecord {
    user: ID!
    room: ID!
    resource: ID!
    tIni: String!
    tFin: String
    comment: String
  }

  input InputCreateActivity {
    user: ID!
    tIni: String!
    tFin: String
  }

`;

module.exports = typeDefs;