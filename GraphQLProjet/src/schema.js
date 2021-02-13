export default `
  scalar Date
  type Query {
    films: [Film]
    film(id: Int!): Film
    director(id: Int!): Director
    actor(id: Int!): Actor
    people: [Person]
  }
  union Person = Actor | Director
  interface IPerson {
    id: Int!
    firstName: String!
    lastName: String!
    dateOfBirth: Date!
    dateOfDeath: Date
  }
  type Actor implements IPerson {
    id: Int!
    firstName: String!
    lastName: String!
    dateOfBirth: Date!
    dateOfDeath: Date
    roles: [Role!]!
  }
  type Director implements IPerson {
    id: Int!
    firstName: String!
    lastName: String!
    dateOfBirth: Date!
    dateOfDeath: Date
    films: [Film]!
  }
  type Film {
    id: Int!
    title: String!
    originalTitle: String!
    [status]: String!
    director: Director!
    roles: [Role]!
  }
  type Role {
    personnage: String!
    actor: Actor!
  }
`;