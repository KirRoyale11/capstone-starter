import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Reviews({ reviews }) {
  // const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="review-container">
      <h2>Reviews:</h2>
      <div className="review-list">
        {reviews?.map((review) => {
          return (
            <div className="single-review" key={reviews.id}>
              <h3>Name: {review.busname}</h3> */Check join params/*
              <h3>Rating: {review.stars}</h3>
              <h5>User: {review.username}</h5> */ Check join params/*
              <p>{review.input}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -ping businesses enpoint for array of businesses
// -call promise.all on businesses.map -save result in variable and log it out
// -axios call to endpoint on businesses.map id
// -flatten promise.all variable into single array
// -display!

export default Reviews;
