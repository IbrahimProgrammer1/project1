// src/app/context/WishlistContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define your Product interface (same as used elsewhere)
export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  priceWithoutDiscount: number;
  image_url: string;
  tags: string[];
}

// A WishlistItem holds a product and its quantity.
interface WishlistItem {
  product: Product;
  quantity: number;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      // Check if the product is already in the wishlist
      const existingItem = prevWishlist.find((item) => item.product._id === product._id);
      if (existingItem) {
        // Increase the quantity
        return prevWishlist.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add as new item with quantity 1
        return [...prevWishlist, { product, quantity: 1 }];
      }
    });
  };

  const removeFromWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((item) => item.product._id === product._id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          // Decrease the quantity by 1
          return prevWishlist.map((item) =>
            item.product._id === product._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // Remove the item entirely if quantity is 1
          return prevWishlist.filter((item) => item.product._id !== product._id);
        }
      }
      return prevWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
