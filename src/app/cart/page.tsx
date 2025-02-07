"use client";
import React from "react";
import { useCart } from "../context/CartContext"; // Import useCart hook
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Navbar />
      <div className="flex-row justify-between items-center px-4 md:px-10 lg:px-20 xl:px-[18.6rem] my-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">🛒 My Cart</h2>
          <Link href="/product">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Back to Products
            </Button>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white p-4 rounded-md shadow-md"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-slate-800">{item.title}</h4>
                    <p className="text-slate-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <Button
                  className="bg-red-500 text-white hover:bg-red-600"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </Button>
              </div>
            ))}

            <div className="mt-6 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
              <h4 className="text-xl font-bold text-slate-800">Total:</h4>
              <p className="text-2xl font-semibold text-slate-800">${totalPrice.toFixed(2)}</p>
            </div>

            <Button
              className="bg-gray-500 text-white mt-4"
              onClick={clearCart} // Clear all items from the cart
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
