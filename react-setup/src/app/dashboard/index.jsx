import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Quering, Naming } from "../_shared/constants";
import { Query, Mutation } from "@apollo/react-components";
import { TableList } from "./components";
import { CompareList } from "./components";
import Model from "../_shared/components/Model";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compare: {}, count: 0, formInput: {} };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  onClick(submit) {
    let required = [];
    Object.keys(Naming.TableHeader).forEach(field => {
      if (!this.state.formInput[field]) required.push(field);
    });
    if (required.length > 0) {
      alert(`${required} need to fill before submit.`);
      return;
    }
  }
  onChange(event) {
    let state = this.state;
    state.formInput[event.target.name] = event.target.value;
    this.setState(state);
  }

  onLoad() {
    setTimeout(() => window.location.reload(), 1000);
  }
  // add data in object so get it easily and delete it also O(1)
  handleChange(event) {
    let state = this.state;
    if (state.compare[event._id]) {
      delete state.compare[event._id];
      state.count--;
    } else {
      state.compare[event._id] = event;
      state.count++;
    }
    this.setState({ ...state });
  }

  render() {
    let compareListing =
      this.state.count > 1 ? (
        <CompareList careers={this.state.compare} />
      ) : (
        "No data select to compare, atleast select 2 playes to compare."
      );
    let form = Object.keys(Naming.TableHeader).map(field => (
      <Form.Group controlId="formBasicEmail" key={field}>
        <Form.Label>{Naming.TableHeader[field]}</Form.Label>
        <Form.Control
          type="text"
          name={field}
          onChange={this.onChange}
          placeholder={Naming.TableHeader[field]}
        />
      </Form.Group>
    ));
    return (
      <Container className="dashboard-container">
        <Mutation mutation={Quering.CREATE_CAREER}>
          {(saveUser, { data }) => {
            return (
              <Model onClick={this.onClick} flag={this.state.modelFlag}>
                <Form
                  onSubmit={event => {
                    event.preventDefault();
                    saveUser({ variables: { ...this.state.formInput } });
                    this.onLoad();
                  }}
                >
                  {form}
                  <Button type="submit">Save</Button>
                </Form>
              </Model>
            );
          }}
        </Mutation>

        <Query query={Quering.GET_CAREER}>
          {({ loading, error, data }) => {
            if (error) throw Error();
            return loading ? (
              <strong>Loading ...</strong>
            ) : (
              <>
                <TableList
                  careers={data.career}
                  headers={Naming.TableHeader}
                  handleChange={this.handleChange}
                  comparable={this.state.compare.count}
                />
                {compareListing}
              </>
            );
          }}
        </Query>
      </Container>
    );
  }
}
