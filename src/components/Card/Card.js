import { CardComponent, Avatar, Name } from "./style";

const Card = ({ item }) => {
  if(!item) return <p>loading...</p>
  return (
    <CardComponent>
      <Avatar src={item.thumbnail} />
      <Name>{item.name}</Name>
    </CardComponent>
  );
};

export default Card;
