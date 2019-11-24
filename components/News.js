export default function News(props) {
  return (
    <ul>
      {props.news.map(item => (
        <li key={item.news_id}>
          <a>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
