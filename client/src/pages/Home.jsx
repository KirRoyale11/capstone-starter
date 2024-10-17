import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import Businesses from "./Businesses";

const Home = ({ auth, authAction, logout, businesses, users, reviews }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="/businesses">View our {businesses.length} Businesses</Link>
        <br />
        <Link to="/users">Hear more from our {users.length} Users</Link>
        <br />
        <Link to="/reviews">See the latest of {reviews.length} Reviews</Link>
      </p>
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
