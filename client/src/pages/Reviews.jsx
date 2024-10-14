import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Reviews({ reviews }) {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/reviews/`);
        if (!response.ok) {
          throw new Error("Sorry... failed to get reviews");
        }
        const data = await response.json();
        // console.log(data);
        setReviewData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getReviews();
  }, []);
  console.log(reviewData);

  return (
    <div className="review-container">
      <h2>Reviews:</h2>
      <div className="review-list" key={reviews.id}>
        {reviewData?.map((review) => {
          return (
            <div className="single-review">
              <h3>Name:</h3>
              <h3>Rating: {review.stars}</h3>
              <h5>User: {review.username}</h5>
              <p>{review.input}</p>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default Reviews;
