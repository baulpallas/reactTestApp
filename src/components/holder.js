import React, { Component } from "react";
import ProductRows from "./productrows";
import CategoryRows from "./categoryrows";
import SearchBar from "./search";
import { Container, Row, Table, Col } from "react-bootstrap";
import { State } from "./productdata";

console.log(State);
class Holder extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Table>
              <CategoryRows />
              <ProductRows products={State} />
            </Table>
            <SearchBar />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Holder;
