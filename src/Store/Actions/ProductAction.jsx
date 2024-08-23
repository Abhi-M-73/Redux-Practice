import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

// here we use higher oredre function to get two method {dispatch , getstate}
export const asyncGetProduct = () => async (dispatch, getState) => {


    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response);
        dispatch(getProducts(response.data));

                
    } catch (error) {
        console.error(error);
        
    }
    

}