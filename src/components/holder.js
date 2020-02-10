import React, { Component } from "react";
import ProductRows from "./productdata";
import CategoryRows from "./categoryrows";
import SearchBar from "./search";
import { Container, Row, Table, Col } from "react-bootstrap";

class Holder extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Table>
              <CategoryRows />
              <ProductRows products={this.props.products} />
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
