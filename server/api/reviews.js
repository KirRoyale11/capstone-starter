const express = require("express");
const router = express.Router();

const { fetchReviews, createReview } = require("../db");

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

module.exports = router;
