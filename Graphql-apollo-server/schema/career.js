export default `

type Career {
  name: String!
  type: String!
  match: String
  inningBatted: String
  notOut: String
  runs: String
  hundreds: String
  fifties: String
  fours: String
  sixes: String
  _id: String
}

type Error {
  code: Int
  error: String
}
type getCareer{
  career : [Career]
  error: Error
}
type Query {
  career(_id:String): getCareer
  comparePlayers(users:[String]): getCareer
}

type Mutation {
  createCareer(name: String!, type: String!, match: String, inningBatted: String, notOut: String, runs: String, hundreds: String, fifties: String, fours: String, sixes: String): Career!
}

`;