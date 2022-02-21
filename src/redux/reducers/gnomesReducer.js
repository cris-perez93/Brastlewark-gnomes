import { 
    GET_GNOMES,
    GET_GNOMES_SUCCESFULLY,
    GET_GNOMES_ERROR,
    GET_GNOME_FILTER_NAME,
    GET_GNOME_FILTER_ERROR
     
} from "../types";


// cada reducer tiene su propio state

const initialState= {
    gnomes: [],
    error: null,
    loading: false,
    gnomename: '',
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {


        case GET_GNOMES: 
             return {
                 ...state,
                 loading: action.payload,
                 
             }

        case GET_GNOMES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        
         
        case GET_GNOMES_SUCCESFULLY: 
             return {
                 ...state,
                 loading:false,
                 error:null,
                 gnomes: action.payload
             }
       


        case GET_GNOME_FILTER_NAME:
            return {
                ...state,
                gnomename : action.payload,
               
            
            }

        

        default:
            return state;
    }
}