import React, { Component } from "react";

class ProductRows extends Component {
  createTable = () => {
    let table = [];
    for (let i = 0; i < this.props.products.length; i++) {
      let children = [];
      children.push(<td>{this.props.products[i].name}</td>);
      children.push(<td>{this.props.products[i].category}</td>);
      children.push(<td>{this.props.products[i].price}</td>);
      children.push(<td>{this.props.products[i].stocked}</td>);
      table.push(<tr>{children}</tr>);
    }
    return table;
  };

  render() {
    return <tbody>{this.createTable()}</tbody>;
  }
}

export default ProductRows;
