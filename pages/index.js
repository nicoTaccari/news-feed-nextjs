import Layout from "../components/Layout.js";
import News from "../components/News";
import fetch from "isomorphic-unfetch";
import dayjs from "dayjs";

const BASE_URL = "https://api.canillitapp.com";
const date = dayjs().format("YYYY-MM-DD");

const Index = props => (
  <Layout>
    <News news={props.news} />
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(`${BASE_URL}/latest/${date}`);
  const news = await res.json();

  return { news };
};

export default Index;
