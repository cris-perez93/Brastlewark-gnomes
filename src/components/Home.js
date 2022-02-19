import styled from '@emotion/styled'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import DisplayCharacters from './DisplayCharacters'
import { getGnomesAction } from '../redux/actions/gnomesActions'


const Title = styled.h1`
margin-top: 120px;
margin-left: 100px;
left: 112px;
top: 63px;
font-style: normal;
font-weight: 900;
font-size: 96px;
color: white;

`
const ContainerHome = styled.div`
  
  width: 1200px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`


const HomePage = () => {

//REDUX
const dispatch = useDispatch();

useEffect(()=>{

   // consultar api 

   const cargarGnomes =  () =>dispatch (getGnomesAction());
   cargarGnomes()

},[])

const gnomes = useSelector( state => state.gnomes.gnomes)


    return ( 
        <div>
             <Title>Brastlewark</Title>
             <ContainerHome>
        <HomePage/>

        <DisplayCharacters
            gnomes={gnomes}
            color = {[...new Set(gnomes.map(color => color.hair_color))]} 
        
        />
        </ContainerHome>
        </div>
     );
}
 
export default HomePage;