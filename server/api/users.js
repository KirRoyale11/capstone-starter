const express = require("express");
const router = express.Router();

const { fetchUsers } = require("../db");

router.get("/users", async (req, res, next) => {
  try {
    res.send(await fetchUsers(data));
    // console.log(users);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
