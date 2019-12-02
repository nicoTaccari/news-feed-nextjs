import Link from "next/link";
import React, { Component } from "react";
import Router from "next/router";
import "../styles/styles.sass";

const categories = [
  { id: "1", name: "Politica" },
  { id: "2", name: "Internacionales" },
  { id: "3", name: "Tecnologia" },
  { id: "4", name: "Espectaculos" },
  { id: "5", name: "Deportes" }
];

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
    if (event.key === "Enter") {
      Router.push(`/search/${this.state.input}`, `/search/${this.state.input}`);
    }
  }

  render() {
    const { input } = this.state;

    return (
      <>
        <br />
        <nav className="level">
          <div className="level-item has-text-centered">
            <Link href="/">
              <a>
                <h1 className="title is-spaced">News Feed</h1>
              </a>
            </Link>
          </div>
        </nav>

        <nav className="level">
          {categories.map(item => (
            <p className="level-item has-text-centered" key={item.id}>
              <Link href="/category/[item.id]" as={`/category/${item.id}`}>
                <a className=" is-primary">{item.name}</a>
              </Link>
            </p>
          ))}
        </nav>

        <div className="field">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Search"
              value={input}
              onChange={event => this.inputChangedHandler(event)}
              onKeyDown={this.filterNews}
            />
            <div className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
