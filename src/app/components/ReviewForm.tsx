"use client"
import React, { useState } from "react";
import { useReviews } from "../context/ReviewContext";
import { Button } from "@/components/ui/button"; // Adjust the import if needed

const ReviewForm = ({ productId }: { productId: string }) => {
  const { addReview } = useReviews();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = { rating, comment };
    addReview(productId, newReview);
    setRating(5); // Reset after submission
    setComment(""); // Reset after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold">Write a Review</h3>
      <div>
        <label htmlFor="rating">Rating: </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border p-2"
        >
          {[5, 4, 3, 2, 1].map((ratingValue) => (
            <option key={ratingValue} value={ratingValue}>
              {ratingValue}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full"
          rows={4}
        />
      </div>
      <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
        Submit Review
      </Button>
    </form>
  );
};

export default ReviewForm;
