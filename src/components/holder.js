import React, { Component } from "react";
import ProductRows from "./productrows";
import CategoryRows from "./categoryrows";
import SearchBar from "./search";
import { Container, Row, Table, Col } from "react-bootstrap";
import { ProductData } from "./productdata";

class Holder extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Table>
              <CategoryRows />
              <ProductRows products={ProductData.products} />
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
