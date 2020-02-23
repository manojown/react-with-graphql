import gql from "graphql-tag";
const GET_CAREER = gql `
query getAllCareer($_id: String) {
  career(_id: $_id) {
      career {
        name
        type
        match
        inningBatted
        notOut
        runs
        hundreds
        fifties
        fours
        sixes
        _id
      }
    error {
      code
      error
    }
  }
}
`;

const CREATE_CAREER = gql `
mutation saveUser($name: String!, $type: String!, $match: String, $inningBatted: String, $hundreds: String, $fifties: String,$fours: String, $sixes: String) {
  createCareer(name: $name, type: $type, match: $match, inningBatted: $inningBatted, hundreds: $hundreds, fifties: $fifties, fours: $fours, sixes: $sixes) {
    name
    type
    match
    inningBatted
  }
}
`
export const Quering = {
  GET_CAREER: GET_CAREER,
  CREATE_CAREER
};