import React from "react";
// import PropTypes from "prop-types";
// import { Button, FormGroup, FormControl, Label } from "react-bootstrap";
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

// or less ideally
// import { Button, Navbar, Container } from "react-bootstrap";

function Error404(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="xs-12 md-6 mx-auto">
          <div id="countUp">
            <div class="number" data-count="404">
              404
            </div>
            <div class="text">Page not found</div>
            <div class="text">This may not mean anything.</div>
            <div class="text">
              I'm probably working on something that has blown up.
            </div>
            <a href="/" style={{ color: "black" }}>
              {" "}
              click here to Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Error404;
