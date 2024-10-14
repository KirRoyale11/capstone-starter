import AuthForm from "../components/AuthForm/AuthForm";
import Businesses from "./Businesses";

const Home = ({ auth, authAction, logout, businesses, users, reviews }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        View our {businesses.length} Businesses
        <br />
        Display some interesting information about our {users.length} Users
        <br />
        Display some interesting information about our {reviews.length} Reviews
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
