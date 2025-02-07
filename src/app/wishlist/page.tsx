// src/app/wishlist/page.tsx
'use client';

import React from "react";
import { useWishlist } from "@/app/context/WishlistContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.product._id}
              className="shadow-lg p-5 rounded-xl bg-white border border-gray-200"
            >
              <Image
                src={item.product.image_url}
                alt={item.product.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">
                {item.product.title}{" "}
                <span className="text-sm text-gray-600">x{item.quantity}</span>
              </h2>
              <p className="text-gray-600 mt-2">
                {item.product.description.slice(0, 80)}...
              </p>
              <p className="text-slate-800 font-bold mt-2">${item.product.price}</p>
              <div className="mt-4 flex space-x-2">
                <Link href={`/product/${item.product._id}`}>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    View Product
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromWishlist(item.product)}
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  Remove One
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
              <Link href={"/product"}>
          <Button variant={"destructive"} className="mt-12">
            Back to Products
          </Button>
        </Link>
    </div>
  );
};

export default WishlistPage;
