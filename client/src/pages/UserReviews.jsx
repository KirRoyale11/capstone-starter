import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";

export default function UserReviews({ auth }) {
  const { id: userId, username } = useParams();
  const [userReviewData, setUserReviewData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // const navigate = useNavigate();
    axios(`http://localhost:3000/api/reviews/users/${userId}`)
      .then(async (response) => {
        const reviews = response.data;
        console.log(reviews);
        setUserReviewData(reviews);
      })
      .catch((err) => console.log("error fetching review data", err));
  }, []);
  async function handleSubmit(reviewId) {
    console.log("Im here!");

    if (userId !== auth.id) {
      navigate("/notauthorized");
    } else {
      axios
        .delete(`http://localhost:3000/api/reviews/${reviewId}`)
        .then((response) => console.log(response))
        .catch((err) => console.log("error deleting review", err));
    }
  }
  // const result = users.find(({ id }) => id === userId);

  return (
    <div>
      <h2>All Reviews by User</h2>
      <div className="user-review-layout">
        {userReviewData?.map(function (data) {
          return (
            <div className="user-review-card" key={data.id}>
              Business: {data.busname}, {data.category}
              <br></br>
              {data.description}
              <br></br>
              Review: {data.input}
              <br></br>
              Rating: <Rating name="read-only" value={data.stars} readOnly />
              <br></br>
              This Review by DoubleCheck user: {data.username}
              <br></br>
              <button onClick={() => handleSubmit(data.id)}>
                Delete Review
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
