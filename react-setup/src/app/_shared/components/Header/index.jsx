import React from "react";
import PropTypes from "prop-types";
// or less ideally

function Header({ text }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky">
      <a className="navbar-brand" href="/">
        Players Stats
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
      </div>
    </nav>
  );
}
Header.defaultProps = {
  text: "Login"
};
Header.propTypes = {
  text: PropTypes.string
};

function onLogout() {
  localStorage.removeItem("token");
  window.location.reload();
}
export default Header;
