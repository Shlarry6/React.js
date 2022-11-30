import './News.css';

const NewsItem = (props) => {
  return (
    <li>
      <div className="box">
        <img
          src={require(`../../Assets/images/${props.image}`)}
          alt="Img"
          height="245"
          width="213"
        />
      </div>
      <p className="info">
        {props.date} by <span className="author">{props.author}</span>
      </p>
      <h2>{props.title}</h2>
      <p>
        {props.text}
      </p>
      <a href={`/news/${props.id}`} className="more">
        Read More
      </a>
    </li>
  );
};

export default NewsItem;
