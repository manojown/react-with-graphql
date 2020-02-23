# react-with-graphql


# App Url
  http://headstart-1.herokuapp.com/
  
 # Query example 
 ```mutation saveUser {
  createCareer(name: "Jadeja rehna", type: "test", match: "500", inningBatted: "300", hundreds: "120", fifties: "400", fours: "400", sixes: "350") {
    name
    type
    match
    inningBatted
  }
}

query getAllCareer {
  career {
    career {
    
      name
    
      fours
    }
    error {
      code
      error
    }
  }
}

query compare {
  comparePlayers(users: ["5e4e452500998f99441b7c31", "5e4e309ffcc9b19727502be7"]) {
    career {
      _id
      name
      fours
      sixes
    }
    error {
      code
      error
    }
  }
}

mutation saveUser1($name: String!, $type: String!, $match: String, $inningBatted: String, $hundreds: String, $fifties: String,$fours: String, $sixes: String) {
  createCareer(name: $name, type: $type, match: $match, inningBatted: $inningBatted, hundreds: $hundreds, fifties: $fifties, fours: $fours, sixes: $sixes) {
    name
    type
    match
    inningBatted
  }
}```
