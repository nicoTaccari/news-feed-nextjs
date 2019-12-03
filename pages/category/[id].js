import Layout from "../../components/Layout";
import News from "../../components/News";
import { Component } from "react";

const BASE_URL = "https://api.canillitapp.com";

class Category extends Component {
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

Category.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${BASE_URL}/news/category/${id}`);
  const news = await res.json();
  return { news };
};

export default Category;
