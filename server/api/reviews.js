const express = require("express");
const router = express.Router();

const {
  fetchReviews,
  createReview,
  getBusinessReviews,
  fetchUsers,
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchReviews());
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log("creating new review");
  try {
    const newReview = await createReview(req.body);
    console.log(newReview);
    res.send(newReview);
  } catch (error) {
    next(error);
  }
});

router.get("/businesses/:id", async (req, res, next) => {
  console.log("Getting business reviews...");
  const { id } = req.params;
  console.log("BID", id);
  try {
    const reviews = await getBusinessReviews(id);
    const users = await fetchUsers();
    console.log(users);
    console.log(reviews);
    const reviewsWithUsername = reviews.map((review) => {
      const reviewsResult = users.find((user) => user.id === review.userid);
      return { ...review, username: reviewsResult.username };
    });
    res.send(reviewsWithUsername);
  } catch (error) {
    next(error);
  }
  // getBusinessReviews(3);
});

// router.get("/business/:businessId", async (req, res, next) => {
//   let businessId = req.params.businessId;
//   try {
//     res.send(await fetchSingleBusinessReviews(businessId));
//   } catch (ex) {
//     next(ex);
//   }
// });

module.exports = router;
