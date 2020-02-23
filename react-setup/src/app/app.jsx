import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { DefaultRoutes } from "./routes";
import { ErrorBoundries, Error404, Header } from "./_shared/components";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL // "https://YOUR-SERVER_UURL";
});

function App() {
  const conditionalRoutes = DefaultRoutes.map(({ component, path, exact }) => {
    return <Route path={path} key={path} component={component} exact={exact} />;
  });

  return (
    <div className="App" data-test="App">
      <ErrorBoundries>
        <ApolloProvider client={client}>
          <Header />
          <Router>
            <Switch>
              {conditionalRoutes}
              <Route component={Error404} />
            </Switch>
          </Router>
        </ApolloProvider>
      </ErrorBoundries>
    </div>
  );
}

export default App;
