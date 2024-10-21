const { client } = require("./client");

const createReview = async ({ busname, stars, input, userid, busid }) => {
  try {
    const SQL = `INSERT INTO reviews(busname, stars, input, userid, busid) VALUES($1, $2, $3, $4, $5) RETURNING *`;
    const {
      rows: [result],
    } = await client.query(SQL, [busname, stars, input, userid, busid]);
    return result;
  } catch (error) {
    throw error;
  }
};

const fetchReviews = async () => {
  const SQL = `
    SELECT * FROM reviews;
    `;
  const response = await client.query(SQL);
  return response.rows;
};

const getBusinessReviews = async (businessesId) => {
  console.log(businessesId);
  try {
    const SQL = `SELECT reviews.id, reviews.input, reviews.userid, reviews.stars, businesses.busName, businesses.description, businesses.busImage FROM
        reviews JOIN businesses ON reviews.busid = businesses.id WHERE businesses.id = $1`;

    const { rows } = await client.query(SQL, [1]);
    if (!rows) return;
    console.log(rows);
    return rows;
  } catch (error) {
    {
      throw error;
    }
  }
};

getBusinessReviews();

// const fetchSingleBusinessReviews = async (id) => {
//   const SQL = `SELECT * FROM reviews WHERE businessID=$1;`;
//   const response = await client.query(SQL, [id]);
//   return response.rows;
// };

module.exports = { createReview, fetchReviews, getBusinessReviews };
