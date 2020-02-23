import React from "react";
import PropTypes from "prop-types";
// or less ideally
// import { Button, Navbar, Container } from "react-bootstrap";

function Register({ text }) {
    return (
        <header className="App-header" data-test="headerComponent">
            <h2>{text}</h2>
        </header>
    );
}
Register.defaultProps = {
    text: "Jobs Searching"
};
Register.propTypes = {
    text: PropTypes.string
};
export default Header;
