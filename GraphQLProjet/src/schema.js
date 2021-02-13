export default `
  scalar Date
  type Query {
    vins: [Vin]
    vin(id: Int!): Vin
    getPerson : [Persons]
    getVignoble(type:String!): Vignoble
    getUser(id:Int!): User
    people: [Person]
  }

 union Person = Vignoble | User

 interface IPerson {
   id: Int!
   lastName: String!
 }

 type Vignoble implements IPerson{
    id: Int!
    lastName: String!
    logo : String!
    address : String!
  }

  type User implements IPerson{
    id: Int!
    lastName: String!
  }

  type Persons {
    id: Int!
    lastName: String!
    type: String!
  }

  type Vin{
    id: Int!
    nom: String!
    typev: String!
    typer: String!
    productor: String!
  }


`;
