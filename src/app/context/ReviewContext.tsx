"use client"
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Create ReviewContext
const ReviewContext = createContext<any>(null);

// Custom hook to use reviews
export const useReviews = () => useContext(ReviewContext);

// ReviewProvider component
export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<any>({});

  // Load reviews from local storage or default to an empty object
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedReviews = localStorage.getItem("reviews");
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      }
    }
  }, []);

  // Store reviews in local storage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  // Function to add review
  const addReview = (productId: string, review: { rating: number; comment: string }) => {
    setReviews((prevReviews: any) => {
      const updatedReviews = { ...prevReviews };
      if (!updatedReviews[productId]) {
        updatedReviews[productId] = [];
      }
      updatedReviews[productId].push(review);
      return updatedReviews;
    });
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
