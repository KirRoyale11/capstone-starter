const express = require("express");
const router = express.Router();

const { fetchBusinesses } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await fetchBusinesses());
    console.log(businesses);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
