import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SearchBar extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Item</Form.Label>
          <Form.Control type="text" placeholder="Enter Item" />
        </Form.Group>
        <Form.Group controlId="Category">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter Category" />
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
