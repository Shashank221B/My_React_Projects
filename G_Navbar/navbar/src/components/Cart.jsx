import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {

  const { cart, removeProduct } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <h1 className="text-3xl font-semibold text-center m-auto">
        Cart is Empty right now....
      </h1>
    );
  }

  const totalCartValue = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6">

      {/* TOTAL VALUE */}
      <p className="text-4xl my-6 font-bold text-red-500 text-center">
        Total Cart Value: ${totalCartValue.toFixed(2)}
      </p>

      {/* CART GRID */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">

        {cart.map((item) => {
          const { image, title, price, category, id } = item;

          return (
            <div
              key={id}
              className="border rounded-lg shadow-lg p-4 bg-white text-center hover:shadow-2xl transition"
            >
              <img
                className="h-48 w-full object-contain mb-4"
                src={image}
                alt={title}
              />

              <h1 className="font-bold text-lg mb-2">
                {title.slice(0, 25)}...
              </h1>

              <p className="text-xl font-bold text-green-600">${price}</p>
              <p className="text-gray-600 capitalize mb-3">{category}</p>

              <button
                onClick={() => removeProduct(id)}
                className="text-lg font-semibold border px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Remove Product
              </button>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Cart;
