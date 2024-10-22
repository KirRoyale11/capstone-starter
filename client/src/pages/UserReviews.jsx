import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function UserReviews(auth) {
  const { id } = useParams();
  const [userReviewData, setUserReviewData] = useState(null);

  console.log(id);
  useEffect(() => {
    axios(`http://localhost:3000/api/reviews/users/${id}`)
      .then(async (response) => {
        const reviews = response.data;
        console.log(reviews);
        setUserReviewData(reviews);
      })
      .catch((err) => console.log("error fetching review data", err));
  }, []);
  async function handleSubmit(id) {
    axios
      .delete(`http://localhost:3000/api/reviews/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log("error deleting review", err));
  }
  return (
    <div>
      <h1>Hello!</h1>
      <div className="main-layout">
        {userReviewData?.map(function (data) {
          return (
            <div className="display-card" key={data.id}>
              Business: {data.busname}, {data.category}
              <br></br>
              {data.description}
              <br></br>
              Review: {data.input}
              <br></br>
              Rating: {data.stars}
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
