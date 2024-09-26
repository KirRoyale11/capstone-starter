const { client } = require("./client");

const { createUser, createBusiness, fetchUsers } = require("./index.js");

const dropTables = async () => {
  try {
    await client.query(`DROP TABLE IF EXISTS users CASCADE`);
    await client.query(`DROP TABLE IF EXISTS businesses CASCADE`);
    await client.query(`DROP TABLE IF EXISTS ratings CASCADE`);
  } catch (err) {
    console.log(err);
  }
};

const createTables = async () => {
  const SQL = `
    
    CREATE TABLE users(
      id UUID PRIMARY KEY,
      username VARCHAR(20) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;
  await client.query(SQL);

  await client.query(`
    CREATE TABLE businesses(
    id SERIAL PRIMARY KEY,
    busName VARCHAR(64) UNIQUE NOT NULL,
    category VARCHAR(64) NOT NULL,
    description VARCHAR(1023) NOT NULL,
    busImage VARCHAR(255) DEFAULT 
      'https://static.wixstatic.com/media/40bb67_32a45a704190429eb53a3f3cd1336cb8~mv2.jpg/v1/fill/w_528,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/40bb67_32a45a704190429eb53a3f3cd1336cb8~mv2.jpg'
  )`);
  // RATINGS TABLE TEMPLATE
  // await client.query(`
  //   CREATE TABLE reviews(
  //   id SERIAL PRIMARY KEY,
  //   busid INTEGER REFERENCES businesses(id),
  //   userid INTEGER REFERENCES user(id),
  //   star TINYINT(5),
  //   text VARCHAR(1023)
  // )`);
};

const insertUsers = async () => {
  try {
    for (const user of users) {
      await createUser(user);
    }
  } catch (error) {
    console.log(error);
  }
};

const insertBusinesses = async () => {
  try {
    for (const business of businesses) {
      await createBusiness(business);
    }
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  await client.connect();
  console.log("connected to database");

  await dropTables();
  console.log("tables dropped");

  await createTables();
  console.log("tables created");

  const [moe, lucy, ethyl, curly] = await Promise.all([
    createUser({ username: "moe", password: "m_pw" }),
    createUser({ username: "lucy", password: "l_pw" }),
    createUser({ username: "ethyl", password: "e_pw" }),
    createUser({ username: "curly", password: "c_pw" }),
  ]);

  const [
    PureAirHVACSolutions,
    SustainableSpaces,
    PetPalsGrooming,
    EventopiaPlanners,
    CraftedCreationsStudio,
  ] = await Promise.all([
    createBusiness({
      busName: "PureAir HVAC Solutions",
      category: "Home Services",
      description:
        "A company specializing in eco-friendly HVAC systems, offering installation and maintenance services for energy-efficient heating, ventilation, and air conditioning units.",
      busImage: "",
    }),
    createBusiness({
      busName: "Sustainable Spaces",
      category: "Interior Design",
      description:
        "An interior design firm focused on creating eco-friendly living spaces using sustainable materials and energy-efficient solutions.",
      busImage: "",
    }),
    createBusiness({
      busName: "PetPals Grooming & Boarding",
      category: "Pet Services",
      description:
        "A full-service pet care business offering grooming, boarding, and daycare for pets, with a focus on comfort and high-quality service for furry friends.",
      busImage: "",
    }),
    createBusiness({
      busName: "Eventopia Planners",
      category: "Event Planning",
      description:
        "A creative event planning company that specializes in organizing memorable weddings, corporate events, and parties, with a flair for unique and personalized experiences.",
      busImage: "",
    }),
    createBusiness({
      busName: "Crafted Creations Studio",
      category: "Arts & Crafts",
      description:
        "A community art studio offering workshops and classes in painting, pottery, and crafting, catering to both beginners and experienced artists looking to explore their creativity.",
      busImage: "",
    }),
  ]);

  console.log(await fetchUsers());
  client.end();
};

// dropTables();
// console.log("Dropping Tables...");
// createTables();
// console.log("Creating tables...");
init();
