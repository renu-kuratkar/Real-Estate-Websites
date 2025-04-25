import React, { useState } from "react";

const ReviewSystem = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      comment: "Great place to live, very peaceful.",
      rating: 4,
      date: "2023-05-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "The location is fantastic, but parking is a bit tight.",
      rating: 3,
      date: "2023-04-15",
    },
  ]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment && rating) {
      const newReview = {
        id: Date.now(),
        name,
        comment,
        rating,
        date: new Date().toLocaleDateString(),
      };
      setReviews([newReview, ...reviews]);
      setName("");
      setComment("");
      setRating(0);
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Review Form - Left Side */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add a Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <div className="flex mb-4">
            <label className="mr-4">Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border border-gray-300 p-2 rounded-lg"
            >
              <option value={0}>Select Rating</option>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg w-full"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Display Reviews - Right Side */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-lg">{review.name}</div>
              <div className="text-yellow-500">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <div className="text-sm text-gray-500 mt-2">{review.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSystem;
