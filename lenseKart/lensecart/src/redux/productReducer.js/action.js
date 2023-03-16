import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actiontype"
import axios from "axios";

export const getProduct = (data)=> (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})

    axios.post(" http://localhost:8080/products", data)
    .then((res) => {
        console.log(res)
        return (
        dispatch({type:PRODUCT_SUCCESS, payload:res.data})
        )
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAILURE})
    });
}