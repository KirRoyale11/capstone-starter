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

router.get("/businesses/:businessId", async (req, res, next) => {
  console.log("Getting business reviews...");
  const { businessId } = req.params;
  try {
    const reviews = await getBusinessReviews(businessId);
    const users = await fetchUsers();
    console.log(users);
    console.log(reviews);
    const reviewsWithUsername = reviews.map((review) => {
      const reviewsResult = users.find((user) => user.id === review.userid);
      return { ...review, username: reviewsResult.username };
    });
  } catch (error) {
    next(err);
  }
});

module.exports = router;
