import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { ContainerSlider } from "./style";
import PropTypes from 'prop-types'

const ScrollComponent = ({ resultGnomes }) => {

  if(!resultGnomes) return <p>Loading...</p>

  return (
    
      <ContainerSlider>
        
        {resultGnomes.length > 0 ? (
          resultGnomes.map((item) => (
            <Link key={item.id}
              to={{
                pathname: `/gnome/${item.name}`,
              }}
            >
              <Card item={item} />
            </Link>
          ))
        ) :  <p>Search not found</p>}
      </ContainerSlider>
   
  );
};

ScrollComponent.propTypes = {
  resultGnomes:PropTypes.array.isRequired,
}

export default ScrollComponent;
