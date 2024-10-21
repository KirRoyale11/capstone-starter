// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// function SingleBusiness() {
//   const { id } = useParams();
//   const [business, setBusiness] = useState(null);
//   const [reviewData, setReviewData] = useState([]);

//   useEffect(() => {
//     axios(`http://localhost:3000/api/businesses/${id}`)
//       .then((response) => {
//         console.log(response.data);
//         setBusiness(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   useEffect(() => {
//     const getBusinessReviewsInfo = async (id) => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/reviews/businesses/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Sorry... failed to get reviews");
//         }
//         const data = await response.json();
//         // console.log(data);
//         setReviewData(response.data);
//         // setLoading(false);
//       } catch (err) {
//         // setError(err.message);
//         // setLoading(false);
//         console.log(err);
//       }
//     };
//     getBusinessReviewsInfo();
//   }, []);
//   console.log(reviewData);

//   {
//     /* <h3>See reviews for {business?.busname}</h3> */
//   }
// }
// <div className="business-review-container">
//   <h2>Reviews:</h2>
//   <div className="business-review-list">
//     {reviewData?.map(function (businessReview) {
//       return (
//         <div className="single-review" key={businessReview.id}>
//           <h3>Name: {businessReview.busname}</h3>
//           <h3>Rating: {review.stars}</h3>
//           <h5>User: {businessReview.username}</h5>
//           <p>{review.input}</p>
//         </div>
//       );
//     })}
//   </div>
//   ;
// </div>;

// export default SingleBusiness;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBusiness() {
  const [business, setBusiness] = useState({});
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const businessResponse = await fetch(
          `http://localhost:3000/api/businesses/${id}`
        );
        const reviewsResponse = await fetch(
          `http://localhost:3000/api/reviews/businesses/${id}`
        );
        console.log(await businessResponse.json());
        if (!businessResponse.ok) {
          throw new Error("Failed to fetch business");
        }
        const businessData = await businessResponse.json();
        console.log(businessData);
        const reviewData = await reviewsResponse.json();
        console.log(reviewData);
        console.log(businessData);
        setReviews(reviewData);
        setBusiness(businessDataData.first);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };
    fetchBusiness();
  }, []);
  // console.log("single businesses", business);
  // console.log("reviews", reviews);
  console.log(id);
  return (
    <div>
      <div className="business-card" key={business.id}>
        <h2 className="business-name">Business: {business.busname} </h2>
        <h2>About Us: {business.description} </h2>
        <img src={business.busimage} alt={business.busname} />
      </div>
      {reviews?.map(function (review) {
        return (
          <div className="business-reviews" key={review.id}>
            <h2 className="reviews">Reviews: {review.review}</h2>
            <h2 className="rating">rating: {review.rating}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default SingleBusiness;
