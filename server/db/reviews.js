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
  try {
    const SQL = `SELECT reviews.id, reviews.input, reviews.stars, businesses.busname, businesses.description, businesses.busimage FROM 
        reviews JOIN businesses ON reviews.busid = businesses.id = $1`;

    const { rows } = await client.query(SQL, [businessesId]);
    if (!rows) return;
    console.log(rows);
    return rows;
  } catch (error) {
    {
      throw error;
    }
  }
};

// getBusinessReviews(1);

module.exports = { createReview, fetchReviews, getBusinessReviews };
