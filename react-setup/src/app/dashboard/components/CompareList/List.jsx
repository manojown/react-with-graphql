import React from "react";
import PropTypes from "prop-types";
import { Naming } from "../../../_shared/constants";

import { Col, Table } from "react-bootstrap";
// console.log("Naming.TableHeaders", Naming.TableHeader);
function List({ career }) {
  let players = Object.keys(Naming.TableHeader).map(data => (
    <tr style={{ padding: "5px" }}>
      <td>{career[data] ? career[data] : "N/A"}</td>
    </tr>
  ));
  return (
    <>
      <Col>
        <Table striped bordered hover>
          <thead style={{ align: "center" }}>{players}</thead>
        </Table>
      </Col>
    </>
  );
}
// JobCard.defaultProps = {
//   job: []
// };
List.prototype = {
  career: PropTypes.Object
};
export default List;
