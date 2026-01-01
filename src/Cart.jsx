import React, { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Jordan 1",
      price: 250,
      quantity: 1,
      image: "/images/product1.png",
    },
    {
      id: 2,
      name: "Nike Dunk Low",
      price: 180,
      quantity: 2,
      image: "/images/product4.png",
    },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-full font-bold"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-full font-bold"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-6">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="flex justify-between mt-6 text-xl font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Cart;
