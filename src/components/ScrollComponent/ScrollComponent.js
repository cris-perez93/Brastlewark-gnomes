import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { ContainerSlider } from "./style";

const ScrollComponent = ({ resultGnomes }) => {
  return (
    
      <ContainerSlider>
        {resultGnomes.map((item) => (
          <Link key={item.id}
            to={{
              pathname: `/gnome/${item.name}`,
            }}
          >
            <Card item={item} />
          </Link>
        ))}
      </ContainerSlider>
   
  );
};

export default ScrollComponent;
