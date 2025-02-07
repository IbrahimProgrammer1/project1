// src/app/ProductCards.tsx
'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext"; // Ensure this context exists
import Link from "next/link";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  priceWithoutDiscount: number;
  image_url: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Wishlist function

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "products"]{
        _id,
        title,
        price,
        priceWithoutDiscount,
        description,
        "image_url": image.asset->url,
        tags
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  const handleAddToWishlist = (product: Product) => {
    addToWishlist(product);
    toast.success(`${product.title} added to wishlist!`);
  };

  const filteredProducts = products.filter((product) =>
    [product.title, product.description].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    product.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="">
      <Navbar />
      <div className="flex-row justify-between items-center px-4 md:px-10 lg:px-20 xl:px-[18.6rem] my-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">🛍️ Products</h2>
          <div className="flex gap-6">
          <Link href="/wishlist">
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              View Wishlist
            </Button>
          </Link>
          <Link href="/cart">
            <Button className="bg-green-600 text-white hover:bg-green-700">
              View Cart
            </Button>
          </Link>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Main Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`} passHref>
              <div className="shadow-lg p-5 rounded-xl bg-white border border-gray-200 cursor-pointer hover:shadow-xl transition duration-300">
                <Image
                  src={product.image_url}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                  <p className="text-gray-500 mt-2 text-sm">
                    {product.description.slice(0, 100)}...
                  </p>
                  <p className="text-slate-800 font-bold mt-2">${product.price}</p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-300 text-black rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent Link navigation
                        handleAddToCart(product);
                      }}
                      className="bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent Link navigation
                        handleAddToWishlist(product);
                      }}
                      className="bg-pink-600 text-white rounded-md hover:bg-pink-700"
                    >
                      Add to Wishlist
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCards;
