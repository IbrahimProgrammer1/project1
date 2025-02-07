"use client"
import React from "react";
import { useReviews } from "../context/ReviewContext";

const ReviewList = ({ productId }: { productId: string }) => {
  const { reviews } = useReviews(); // Access reviews from context
  const productReviews = reviews[productId] || []; // Safely access reviews for the product

  return (
    <div className="space-y-4 mt-8">
      <h3 className="text-xl font-semibold">Reviews</h3>
      {productReviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        productReviews.map((review: { rating: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; comment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Rating:</span>
              <span>{review.rating} ⭐</span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;


