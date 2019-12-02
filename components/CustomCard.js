export default function News(props) {
  const { title, category, img_url, source_name, url } = props.item;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img_url} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <p className="subtitle">
          <strong>{title}</strong>
        </p>
        <p className="subtitle tag is-accent is-medium">
          <i>
            {source_name + " " + "|"} {category !== "" ? category : "Varios"}
          </i>
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <a href={url} target="_blank">
              Read More
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
