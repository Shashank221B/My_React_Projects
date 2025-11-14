import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

    const [products,setProducts] = useState([]);
    const [filter,setFilter] = useState(true);
    const [selectedCategories,setSelectedCategories] = useState([]);
    const [sort,setSort] = useState(false);

    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            }catch(err){
                console.log("Error:", err);
            }
        }
        fetchProducts();
    },[])

    const handleCategoryChange=(category)=>{
        if(selectedCategories.includes(category)){
            setSelectedCategories(prev=>prev.filter(c=>c!==category));
        } else {
            setSelectedCategories([...selectedCategories,category]);
        }
    }

    let filteredProducts = selectedCategories.length
        ? products.filter((prod)=>selectedCategories.includes(prod.category))
        : products;

    if(sort){
        filteredProducts = [...filteredProducts].sort((a,b)=>a.price-b.price);
    }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen px-4 sm:px-6">

      {/* FILTER SIDEBAR */}
      {filter && (
        <div className="md:w-[22%] w-full md:my-10 my-4 md:mx-4 p-4 border rounded-lg shadow-md text-xl font-semibold bg-white">
          <h2 className="text-2xl font-bold mb-3 text-blue-700">Filter by Category</h2>

          <ul className="space-y-3">
            <li>
              <input className="mr-2 size-5" type="checkbox"
                onChange={()=>handleCategoryChange("men's clothing")}
                checked={selectedCategories.includes("men's clothing")}
              /> Men's Clothing
            </li>

            <li>
              <input className="mr-2 size-5" type="checkbox"
                onChange={()=>handleCategoryChange("women's clothing")}
                checked={selectedCategories.includes("women's clothing")}
              /> Women's Clothing
            </li>

            <li>
              <input className="mr-2 size-5" type="checkbox"
                onChange={()=>handleCategoryChange("jewelery")}
                checked={selectedCategories.includes("jewelery")}
              /> Jewelry
            </li>

            <li>
              <input className="mr-2 size-5" type="checkbox"
                onChange={()=>handleCategoryChange("electronics")}
                checked={selectedCategories.includes("electronics")}
              /> Electronics
            </li>
          </ul>
        </div>
      )}

      {/* DIVIDER (only on big screens) */}
      {filter && (
        <div className="hidden md:block w-px bg-gray-300 mx-3"></div>
      )}

      {/* PRODUCTS SECTION */}
      <div className="flex-1">
        
        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 my-4">
          <button
            onClick={()=>setFilter(prev=>!prev)}
            className="px-4 py-2 border-2 rounded-lg bg-blue-500 text-white font-bold text-lg cursor-pointer"
          >
            {filter ? "Hide Filters" : "Show Filters"}
          </button>

          <button
            onClick={()=>setSort(prev=>!prev)}
            className="px-4 py-2 border-2 rounded-lg bg-green-500 text-white font-bold text-lg cursor-pointer"
          >
            Sort by Price
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {filteredProducts.map((prod)=> {
            const { id, category, image, price, title } = prod;

            return (
              <Link
                to={`/products/${id}`}
                key={id}
                className="rounded-lg p-4 text-center shadow-xl hover:shadow-2xl transition border bg-white"
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="h-48 w-48 object-contain mx-auto mb-3 hover:scale-110 transition"
                />

                <p className="font-bold text-blue-800 mt-2">{title}</p>
                <p className="font-bold text-red-600 mt-1">${price}</p>
                <p className="font-bold mt-1 capitalize text-gray-700">{category}</p>
              </Link>
            );
          })}

        </div>
      </div>

    </div>
  );
}

export default Products;
