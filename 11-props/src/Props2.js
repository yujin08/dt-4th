import image from './assets/book.png';
import './App.css';

const BookComponent = (props) => {
  return (
    <div className="BookContainer">
      <h2 className="h2">이번주 베스트셀러</h2>
      <img className="BookImage" src={image} />
      <h3>{props.title}</h3>
      <div>저자:{props.author} </div>
      <div>판매가:{props.price}원</div>
      <div>구분: {props.type}</div>
    </div>
  );
};

export default BookComponent;
