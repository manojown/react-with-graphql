import React from "react";
import PropTypes from "prop-types";
import List from "./List";
import { Naming } from "../../../_shared/constants";

import { Row, Col, Table } from "react-bootstrap";

function CompareList({ careers }) {
  let list = Object.keys(careers).map(career => (
    <List career={careers[career]} />
  ));
  return (
    <Row data-test="compare-obj">
      <Col>
        <Table striped bordered hover>
          {Object.values(Naming.TableHeader).map(heading => (
            <thead>
              <tr>
                <td>{heading}</td>
              </tr>
            </thead>
          ))}
        </Table>
      </Col>

      {list}
    </Row>
  );
}
// JobCard.defaultProps = {
//   job: []
// };
CompareList.prototype = {
  careers: PropTypes.Object
};
export default CompareList;
