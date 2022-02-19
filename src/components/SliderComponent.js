import styled from "styled-components";
import Slider from "react-slick";
import Card from "./Card";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  };

const Container=styled.div`
   width:90%;
   margin: 0 auto;
   position: absolute;
   bottom: 20px;
   left: 50px;
   border-radius: 10px;
   background-color: #2c2c2c86;
 `




const SliderComponent = ({gnomesFiltered}) => {

  

  return (
        
      <div>
      
     <Container>
      <Slider {...settings}>
        {gnomesFiltered.map((item) => (
         
            
            <Card item={item}/>
            
          
        ))}
      </Slider>
      </Container>
      
    </div>
       

      );
}
 
export default SliderComponent;