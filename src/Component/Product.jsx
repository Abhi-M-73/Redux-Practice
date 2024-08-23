import { useDispatch, useSelector } from 'react-redux'
import {getProducts }from '../Store/reducers/ProductReducer'
import { useEffect } from 'react';
import { asyncGetProduct } from '../Store/Actions/ProductAction';


function Product() {


    const {products} = useSelector((state) => state.ProductReducer)
    console.log(products);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(asyncGetProduct())
        
    }, [])  


  return (
    <>
      <div className='h-screen w-full mt-5 '>
        <div className='max-w-screen-xl mx-auto mt-5 flex flex-col items-center justify-center'>
          <h1 className='font-sans font-semibold text-5xl'>Products</h1>
          <ul className='bg-gray-200 mt-5 p-5 rounded-md'>
            {products.map((item, index)=> <li key={index}>{item.title}</li> )}
          </ul>
        </div>

        

      </div>
    </>
  )
}

export default Product;
