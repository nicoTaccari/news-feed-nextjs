import Link from "next/link";
import React, { Component } from "react";
import Router from "next/router";

const categories = [
  { id: "1", name: "Politica" },
  { id: "2", name: "Internacionales" },
  { id: "3", name: "Tecnologia" },
  { id: "4", name: "Espectaculos" },
  { id: "5", name: "Deportes" }
];

const BASE_URL = "https://api.canillitapp.com";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.filterNews = this.filterNews.bind(this);
  }

  inputChangedHandler(event) {
    this.setState({ input: event.target.value });
  }

  filterNews() {
    Router.push(`/search/${this.state.input}`, `/search/${this.state.input}`);
  }

  render() {
    const { input } = this.state;

    return (
      <>
        <ul>
          {categories.map(item => (
            <li key={item.id}>
              <Link href="/category/[item.id]" as={`/category/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <label>Busqueda:</label>
          <input
            type="text"
            placeholder="Quiero leer sobre..."
            value={input}
            onChange={event => this.inputChangedHandler(event)}
          />
          <button onClick={this.filterNews}>Search</button>
        </div>
      </>
    );
  }
}

export default Navbar;
