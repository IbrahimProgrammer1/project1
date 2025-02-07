// components/Cart.tsx
"use client";
import React from "react";
import Image from "next/image";

interface Product {
    _id: string;
    title: string;
    price: number;
    image_url: string;
}

interface CartProps {
    cartItems: Product[];
    removeFromCart: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
    // Calculate Total Price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            
            <h3 className="text-2xl font-bold mb-4 text-slate-800">🛒 My Cart</h3>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex items-center justify-between bg-white p-3 rounded-md shadow">
                            <div className="flex items-center gap-4">
                                <Image src={item.image_url} alt={item.title} width={80} height={80} className="rounded-md object-cover" />
                                <div>
                                    <h4 className="font-semibold text-lg">{item.title}</h4>
                                    <p className="text-slate-600">${item.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total Price Section */}
                    <div className="mt-4 p-3 bg-blue-100 rounded-md flex justify-between items-center">
                        <h4 className="text-lg font-bold text-blue-800">Total:</h4>
                        <p className="text-xl font-semibold text-blue-800">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
