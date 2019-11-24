import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

const BASE_URL = "https://api.canillitapp.com";

const Category = props => (
  <Layout>
    <ul>
      {props.news.map(item => (
        <li key={item.news_id}>
          <a>{item.title}</a>
        </li>
      ))}
    </ul>
  </Layout>
);

Category.getInitialProps = async function(context) {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(`${BASE_URL}/news/category/${id}`);
  const news = await res.json();
  console.log(news);

  return { news };
};

export default Category;
