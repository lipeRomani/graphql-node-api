import { makeExecutableSchema } from 'graphql-tools';

const users: any[] =[
  {
    id: 1,
    name: 'jhon',
    email: 'jhon@email.com',
  },
  {
    id: 2,
    name: 'dany',
    email: 'dany@email.com',
  }
];

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  User: {
    id: (user) => user.id,
    name: (user) => user.name,
    email: (user) => user.email
  },
  Query: {
    allUsers: () => users,
  },
  Mutation: {
    createUser: (parent, args) => {
      const newUser = Object.assign({id: users.length + 1}, args);
      users.push(newUser);
      return newUser;
    }
  },
}

export default makeExecutableSchema({typeDefs, resolvers});