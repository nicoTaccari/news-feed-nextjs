import React, { Component } from "react";

class Pagination extends Component {
  state = {
    endOfScroll: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.checkEndOfScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.checkEndOfScroll);
  }
  checkEndOfScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.setState({ endOfScroll: true });
    } else {
      this.setState({ endOfScroll: false });
    }
  };
  goToPage = page => {
    this.props.goToPage(page);
    window.scroll({ top: 0, behavior: "smooth" });
  };
  goToPrevPage = currentPage => {
    let page = --currentPage;
    if (currentPage >= 1) {
      this.props.goToPage(page);
    }
    window.scroll({ top: 0, behavior: "smooth" });
  };
  goToNextPage = currentPage => {
    let page = ++currentPage;
    if (currentPage <= this.props.totalPages) {
      this.props.goToPage(page);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };
  render() {
    const { totalPages, currentPage } = this.props;
    return (
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <a
          className="pagination-previous"
          onClick={() => this.goToPrevPage(currentPage)}
        >
          Previous
        </a>
        {currentPage === totalPages ? (
          ""
        ) : (
          <a
            className="pagination-next"
            onClick={() => this.goToNextPage(currentPage)}
          >
            Next page
          </a>
        )}
        <ul className="pagination-list">
          <li>
            <a className="pagination-link" onClick={() => this.goToPage(1)}>
              First
            </a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a
              className="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
            >
              {currentPage}
            </a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a
              className="pagination-link"
              onClick={() => this.goToPage(totalPages)}
            >
              Last
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
