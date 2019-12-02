import Layout from "../components/Layout.js";
import News from "../components/News";
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";
import React, { Component } from "react";

const BASE_URL = "https://api.canillitapp.com";
const date = dayjs()
  .format("YYYY-MM-DD")
  .toString();

class Index extends Component {
  state = {
    currentNews: null,
    currentPage: 1,
    totalPages: null
  };
  newsPerPage = 12;

  componentDidMount() {
    this.setPagination();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.setPagination(this.state.news);
    }
  }

  setPagination = () => {
    let lastIndex = this.state.currentPage * this.newsPerPage;
    let firstIndex = lastIndex - this.newsPerPage;
    let pages = Math.round(this.props.news.length / this.newsPerPage);
    this.setState({
      currentNews: this.props.news.slice(firstIndex, lastIndex),
      totalPages: pages
    });
  };

  goToPage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Layout>
        {this.state.currentNews && (
          <News
            news={this.state.currentNews}
            totalPages={this.state.totalPages}
            currentPage={this.state.currentPage}
            goToPage={this.goToPage}
          />
        )}
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  const news = await fetch(`${BASE_URL}/latest/${date}`)
    .then(response => response.json())
    .catch(error => console.log(error));

  return { news };
};

export default Index;
