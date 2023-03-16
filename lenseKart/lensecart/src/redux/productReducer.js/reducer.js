import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actiontype";

const initialstate = {
    isLoading : false,
    isError : false,
    products : []
}
export const reducer = (state=initialstate, {type, payload}) =>{
    switch(type){
        case PRODUCT_REQUEST : 
            return {...state, isLoading : true};
        case PRODUCT_SUCCESS :
            return {...state, isLoading:false};
        case PRODUCT_FAILURE :
            return {...state, isError : true}
        default :
            return initialstate;
    }
}