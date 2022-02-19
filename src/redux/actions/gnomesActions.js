import {
    GET_GNOMES,
    GET_GNOMES_SUCCESFULLY,
    GET_GNOMES_ERROR, 
    GET_GNOME_FILTER,
    GET_GNOME_FILTER_SUCCESFULLY,
    GET_GNOME_FILTER_ERROR
   } from "../types";



export function getGnomesAction() {
   return async(dispatch) =>{
       dispatch(getGnomes())

       try {
            
           const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

           const response = await fetch(url)
           const gnomes = await response.json()
           
           
           dispatch(getGnomesSuccesfully(gnomes.Brastlewark))

           
       } catch (error) {
           console.log(error)
           dispatch(getGnomesError())
           
       }
   }
}

const getGnomes = () => ({
   type: GET_GNOMES,
   payload:true
})

const getGnomesSuccesfully = (gnomes) => ({
   type: GET_GNOMES_SUCCESFULLY,
   payload: gnomes
})

const getGnomesError = () => ({
   type: GET_GNOMES_ERROR,
   payload: true
})


export function filterGnomeAction(color) {
   return async (dispatch) => {
       dispatch(getGnomeFilter(color));
       dispatch(getGnomeFilterSuccesfully())

       console.log(color)
   }
}

const getGnomeFilter = color => ({
   type: GET_GNOME_FILTER,
   payload: color
})

const getGnomeFilterSuccesfully =  () => ({
   type: GET_GNOME_FILTER_SUCCESFULLY,
   
})