// src/app/product/[id]/page.tsx
'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext"; // Wishlist context
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import toast from "react-hot-toast";
import Link from "next/link";
import { useReviews } from "@/app/context/ReviewContext";
import ReviewForm from "@/app/components/ReviewForm";
import ReviewList from "@/app/components/ReviewList";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  priceWithoutDiscount: number;
  image_url: string;
  tags: string[];
}

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Wishlist function
  const { reviews } = useReviews();

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const query = `*[_type == "products" && _id == "${id}"][0]{
        _id,
        title,
        price,
        priceWithoutDiscount,
        description,
        "image_url": image.asset->url,
        tags
      }`;
      const data = await client.fetch(query);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  if (!product) {
    return <div className="text-center my-20">Loading product...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(`${product.title} added to wishlist!`);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex gap-6 my-6">
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
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src={product.image_url}
            alt={product.title}
            width={600}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <p className="text-xl font-bold text-slate-800 mt-4">${product.price}</p>

            <div className="mt-4 flex space-x-2">
              <Button
                className="bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                className="bg-pink-600 text-white rounded-md hover:bg-pink-700"
                onClick={handleAddToWishlist}
              >
                Add to Wishlist
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-300 text-black rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Review Form */}
        <ReviewForm productId={id} />

        {/* Display Reviews */}
        <ReviewList productId={id} />

        <Link href={"/product"}>
          <Button variant={"destructive"} className="mt-12">
            Back to Products
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
