import React, { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ProductDetails = () => {

    const {id} = useParams();
    const[product,setProduct] = useState(null);
    const[showNotification,setShowNotification] = useState(false);

    
    const {addProduct} = useContext(CartContext);

    const addNotification = ()=>{ 
        setShowNotification(true);

        setTimeout(()=>{
            setShowNotification(false);
        },3000)
    }

    const handleClick = ()=>{
        addProduct(product);
        addNotification();
       }


    useEffect(()=>{

        const fetchProduct = async()=>{
            const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await resp.json();

            setProduct(data);
        }

        fetchProduct();

    },[id])

    if(product){
        const {image,id, title,category,price} = product;
        return(<div key={id} className='h-[80vh] w-[60vw] bg-gray-300 mx-auto my-4 flex flex-col items-center gap-3 rounded-lg'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <img src={image} alt='id_image' className='h-[400px]'/>
            <p className='text-xl font-bold text-red-700'>{price}</p>
            <p className='text-2xl font-bold'>{category}</p>

            <div className='relative'>
                <button  className='text-xl font-semibold border-2 px-4 py-2 rounded-lg bg-blue-600 text-white'>
                <Link to={`/products`}>
                Back to Products
                </Link>
            </button>

            <button onClick={handleClick } className='text-xl font-semibold border-2 px-4 py-2 rounded-lg bg-blue-600 text-white ml-2 cursor-pointer'>Add To Cart</button>

            {
                showNotification && <div className='absolute top-20 right-10'>
                    <h1 className='text-2xl text-red-400 font-bold text-center'>PRODUCT ADDED!</h1>
                </div>
            }
            </div>
        </div>)
    }

  return (
    <div>
        <h1>No Products Found</h1>
    </div>
  )
}

export default ProductDetails;