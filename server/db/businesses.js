// const createBusiness = async ({}) => {
//   //   if (!username || !password) {
//   //     const error = Error("username and password required!");
//   //     error.status = 401;
//   //     throw error;
//   //   }
//   const SQL = `
//     INSERT INTO businesses(id, name, category, description) VALUES($1, $2, $3, $4) RETURNING *
//   `;
//   const response = await client.query(SQL, [
//     // uuid.v4(),
//     // username,
//     // await bcrypt.hash(password, 5),
//   ]);
//   return response.rows[0];
// };

const { client } = require("./client");
const createBusiness = async ({ busName, category, description, busImage }) => {
  try {
    const SQL = `INSERT INTO businesses(busName, category, description, busImage) VALUES($1, $2, $3, $4) RETURNING *`;
    const {
      rows: [business],
    } = await client.query(SQL, [
      busName,
      category,
      description,
      busImage ||
        "https://en.wikipedia.org/wiki/Retail#/media/File:AA446b_copy.jpeg",
    ]);

    return business;
  } catch (err) {
    console.log(err);
  }
};

const fetchBusinesses = async () => {
  const SQL = `SELECT * FROM businesses;`;
  const response = await client.query(SQL);
  return response.rows;
};

module.exports = { createBusiness, fetchBusinesses };
