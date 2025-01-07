const FoodComponent = (props) => {
  return (
    <>
      <div>내가 좋아하는 음식은</div>
      <div style={{ color: 'red' }}>{props.food}</div>
    </>
  );
};

FoodComponent.defaultProps = {
  food: '햄버거',
};

export default FoodComponent;
