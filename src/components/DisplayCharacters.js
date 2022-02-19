
import SliderComponent from "./SliderComponent";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterGnomeAction } from "../redux/actions/gnomesActions";

const ButtonHair = styled.button`
  width: 100px;
  padding: 5px;
`
const ContainerButtons= styled.div`

  padding: 5px;
  margin-left: 200px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  
`


const DisplayCharacters = ({gnomes,color}) => {

  const dispatch = useDispatch();

  //set color of button
  const setFilteredColor =  (color) => {

    dispatch(filterGnomeAction(color))

  }

  // extraer gnomos filtrados
  const filteredHair =  useSelector(state => state.gnomes.gnomesfiltered)

  // pasar los gnomos filtrados o todo el objeto de gnomos.
  const gnomesFiltered = filteredHair.length > 0
       ? filteredHair
       : gnomes



  

  return (
    <div>
      <ContainerButtons>
      {color.map(color =>(
             <ButtonHair key={gnomes.id} onClick={() =>{setFilteredColor(color)}}>
                 {color}
             </ButtonHair>
         ))}
      </ContainerButtons>

      <SliderComponent 
         gnomesFiltered={gnomesFiltered}
         
      />
    </div>
  )

}

export default DisplayCharacters;