import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Reviews({}) {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/reviews/${busid}`
        );
        if (!response.ok) {
          throw new Error("Sorry... failed to get reviews");
        }
        const data = await response.json();
        console.log(data);
        setReviewData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getReviews();
  }, []);

  return <h2>Reviews:</h2>;
}

export default Reviews;
