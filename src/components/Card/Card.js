import { CardComponent, Avatar, Name } from "./style";
import PropTypes from 'prop-types'

const Card = ({ item }) => {
  if(!item) return <p>loading...</p>
  return (
    <CardComponent>
      <Avatar src={item.thumbnail} />
      <Name>{item.name}</Name>
    </CardComponent>
  );
};

Card.propTypes = {
  item:PropTypes.object.isRequired,
}

export default Card;
