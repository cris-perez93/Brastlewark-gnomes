import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { filterGnomeName } from '../../redux/actions/gnomesActions'
import { getGnomesAction } from '../../redux/actions/gnomesActions'
import ScrollComponent from '../ScrollComponent/ScrollComponent'
import Pagination from '../Pagination/Pagination'
import Form from '../SearchForm/Form'
import { Title,ContainerHome, Container } from "./style"





const ViewHome = () => {

// state for pagination.
const [currentPage, setCurrentPage] = useState(1)
const [cardsPerPage] =  useState(10)


const dispatch = useDispatch();

//get state from...
const gnomes = useSelector( state => state.gnomes.gnomes)
const error = useSelector(state => state.gnomes.error)
const loading = useSelector(state => state.gnomes.loading)
const gnomeName = useSelector((state) => state.gnomes.gnomename);
//fn to call API
const cargarGnomes =  () =>dispatch (getGnomesAction());
// execute fn 
useEffect(()=>{
    
  cargarGnomes()
},[])

//fn get value from handlechange and take it to state
const setFilteredName = (name) => {
  dispatch(filterGnomeName(name));
};
   
// Onclick Buttons Navigation-----
const nextPage = () => {
  setCurrentPage(currentPage + 1)
}

const prevPage = () => {
  setCurrentPage(currentPage - 1)
}//-------------------------------

// reading value changes on the input
const handleChange = (e) => {
  setFilteredName(e.target.value);
};

// getting filter name into new constant
const resultGnomes = gnomes.filter((gnome) =>
    gnome.name.toLocaleLowerCase().includes(gnomeName.toLocaleLowerCase())
  );

//get current cards
const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = resultGnomes.slice(indexOfFirstCard, indexOfLastCard)

if(loading) return <p>Loading...</p>
if(error) return <p>Database error</p>





  return ( 
        
             
             <ContainerHome>
                <Title>Brastlewark</Title>
               <Container>
               <Form gnomeName={gnomeName} handleChange={handleChange}/>
               <ScrollComponent resultGnomes={currentCards}/>
               <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage}/>
               </Container>
             </ContainerHome>
        
     );
}
 
export default ViewHome;