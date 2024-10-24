import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import Businesses from "./Businesses";

const Home = ({ auth, authAction, logout, businesses, users, reviews }) => {
  return (
    <div className="home-container">
      <h1>Home</h1>

      <div className="home-item">
        <Link to="/businesses">
          <img
            className="home-img"
            src="https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_77--hORBW8mhbBErgS_ju/public?id=2024-10-22T17:21:49.956Z"
          />
        </Link>
        <br />
        <Link to="/businesses">View our {businesses.length} Businesses</Link>
        <br />
      </div>
      <div className="home-item">
        <Link to="/users">
          <img
            className="home-img"
            src="https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_30--eqETlranE8IldZzVi/public?id=2024-10-22T17:26:34.816Z"
          />
        </Link>
        <br />
        <Link to="/users">Hear more from our {users.length} Users</Link>
        <br />
      </div>
      <div className="home-item">
        <Link to="createReview">
          {" "}
          <img
            className="home-img"
            src="https://imagedelivery.net/ZMsc4Rh1AHFp0qz_tfBn9w/png_13--uTk3hwTDvKbv-9uem/public?id=2024-10-22T18:17:53.762Z"
          />
        </Link>{" "}
        <br />
        <p>
          We have {reviews.length} reviews.
          <Link to="/createReview"> Add yours!</Link>
        </p>
      </div>

      {!auth.id ? (
        <>
          {/* <AuthForm authAction={authAction} mode="login" /> */}
          {/* <AuthForm authAction={authAction} mode="register" /> */}
        </>
      ) : null}
    </div>
  );
};

export default Home;
