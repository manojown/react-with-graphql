import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

function TableList({ careers, headers, handleChange, comparable }) {
  let players = careers.career;
  let header = Object.values(headers).map(heading => (
    <td key={heading}>{heading}</td>
  ));
  // let compareButton = comparable > 1 ? <Button>Compare</Button> : "";
  let allTr = players.map((player, i) => {
    return (
      <tr key={i}>
        {Object.keys(headers).map(key => (
          <td key={key}>{player[key] ? player[key] : "N/A"}</td>
        ))}
        <td>
          <input type="checkbox" onChange={() => handleChange(player)} />
        </td>
      </tr>
    );
  });

  return (
    <Table striped bordered hover data-test="Listing">
      <thead>
        <tr>
          {header}
          <td>action</td>
        </tr>
      </thead>
      <tbody>{allTr}</tbody>
    </Table>
  );
}
TableList.defaultProps = {
  // onHandleChange:
};
TableList.propTypes = {
  // onHandleChange: PropTypes.func.isRequired
  players: PropTypes.array
};

export default TableList;
