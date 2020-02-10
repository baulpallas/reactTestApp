import React, { Component } from "react";
import "./App.css";
import Products from "./components/productdata";
import ProductRows from "./components/productrows";
import CategoryRows from "./components/categoryrows";
import Table from "react-bootstrap/Table";
import SearchBar from "./components/search";
import Holder from "./components/holder";
class App extends Component {
  state = {
    products: [
      {
        category: "Sporting Goods",
        price: "$23.99",
        stocked: true,
        name: "tball"
      },
      {
        category: "Sporting Goods",
        price: "$90.99",
        stocked: true,
        name: "Pipe"
      },
      {
        category: "Sporting Goods",
        price: "$20.99",
        stocked: true,
        name: "Mikeys Dignity"
      },
      {
        category: "Electronics",
        price: "$23.99",
        stocked: true,
        name: "Hello"
      },
      {
        category: "Electronics",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Electronics",
        price: "$49.99",
        stocked: true,
        name: "Football"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {/* <Holder products={this.state.products} /> */}
        <Table>
          <CategoryRows />
          <ProductRows products={this.state.products} />
        </Table>
        <SearchBar />
      </div>
    );
  }
}

export default App;
