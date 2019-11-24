import Layout from "../../components/Layout";
import News from "../../components/News";

const BASE_URL = "https://api.canillitapp.com";

const Search = props => (
  <Layout>
    <News news={props.news} />
  </Layout>
);

Search.getInitialProps = async function(context) {
  const { query } = context.query;
  const res = await fetch(`${BASE_URL}/search/${query}`);
  const news = await res.json();

  return { news };
};

export default Search;
