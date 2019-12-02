const WithPaginator = WrappedComponent => {
  return class extends React.Component {
    newsPerPage = 12;

    setPagination = () => {
      let lastIndex = this.state.currentPage * this.newsPerPage;
      let firstIndex = lastIndex - this.newsPerPage;
      let pages = Math.round(props.news.length / this.newsPerPage);
      this.setState({
        currentNews: props.news.slice(firstIndex, lastIndex),
        totalPages: pages
      });
    };

    goToPage = page => {
      this.setState({ currentPage: page });
    };

    render() {
      return (
        <WrappedComponent
          goToPage={this.goToPage}
          setPagination={this.setPagination}
          {...this.props}
        />
      );
    }
  };
};

export default WithPaginator;
