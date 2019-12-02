import CustomCard from "./CustomCard";
import Pagination from "../components/Paginator";

export default function News(props) {
  const { totalPages, currentPage, news, goToPage } = props;
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {news.map(item => (
            <div className="column is-one-quarter" key={item.news_id}>
              <CustomCard item={item} />
            </div>
          ))}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={goToPage}
        />
      </div>
    </section>
  );
}
