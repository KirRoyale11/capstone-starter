import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Businesses from "./pages/Businesses";
import CreateReview from "./pages/CreateReview";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotAuth from "./pages/NotAuth";
import Register from "./pages/Register";
import Reviews from "./pages/Reviews";
import CreateBusiness from "./pages/CreateBusiness";
import SingleBusiness from "./pages/SingleBusiness";
import UserReviews from "./pages/UserReviews";

function App() {
  const [auth, setAuth] = useState({});
  const [users, setUsers] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState(null);
  const [businessReviewsInfo, setBusinessReviewsInfo] = useState([]);

  useEffect(() => {
    attemptLoginWithToken();
  }, []);

  const attemptLoginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await fetch(`/api/auth/me`, {
        headers: {
          authorization: token,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setAuth(json);
      } else {
        window.localStorage.removeItem("token");
      }
    }
  };

  const authAction = async (credentials, mode) => {
    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      window.localStorage.setItem("token", json.token);
      attemptLoginWithToken();
    } else {
      throw json;
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setAuth({});
  };

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/businesses`);

        if (!response.ok) {
          throw new Error("Failed to fetch businesses");
        }
        const data = await response.json();
        // console.log(data);
        setBusinesses(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBusinesses();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users`);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        // console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/reviews/`);
        if (!response.ok) {
          throw new Error("Sorry... failed to get reviews");
        }
        const data = await response.json();
        // console.log(data);
        setReviews(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getReviews();
  }, []);
  // console.log(reviews);

  // useEffect(() => {
  //   const getBusinessReviewsInfo = async (businessId) => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/api/reviews/businesses/${businessId}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Sorry... failed to get reviews");
  //       }
  //       const data = await response.json();
  //       // console.log(data);
  //       setBusinessReviewsInfo(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   getBusinessReviewsInfo();
  // }, []);

  return (
    <>
      <h1>DoubleCheck Reviews</h1>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/businesses">Businesses ({businesses.length})</Link>

        <Link to="/users">Users ({users.length})</Link>
        {/* <Link to="/reviews">Reviews ({reviews.length})</Link> */}
        {auth.id ? (
          <Link to="/createReview">Create Review</Link>
        ) : (
          <Link to="/login">Register/Login</Link>
        )}
        {auth.id ? <Link to="/createbusiness">Add a Business</Link> : null}
      </nav>
      {auth.id && (
        <button className="logout-button" onClick={logout}>
          Logout {auth.username}
        </button>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              authAction={authAction}
              auth={auth}
              businesses={businesses}
              users={users}
              reviews={reviews}
            />
          }
        />
        <Route
          path="/businesses"
          element={<Businesses businesses={businesses} />}
        />

        <Route path="/reviews" element={<Reviews reviews={reviews} />} />

        <Route path="/users" element={<Users users={users} />} />
        {!!auth.id && (
          <Route
            path="/createReview"
            element={
              <CreateReview
                businesses={businesses}
                reviews={reviews}
                auth={auth}
              />
            }
          />
        )}

        <Route
          path="/users/:id"
          element={<UserReviews users={users} reviews={reviews} auth={auth} />}
        />

        <Route
          path="/createbusiness"
          element={<CreateBusiness businesses={businesses} auth={auth} />}
        />

        <Route
          path="/businesses/:id"
          element={<SingleBusiness businesses={businesses} reviews={reviews} />}
        />
        <Route
          path="/login"
          element={<Login authAction={authAction} auth={auth} />}
        />
        <Route
          path="/register"
          element={<Register authAction={authAction} auth={auth} />}
        />
        <Route path="/notauthorized" element={<NotAuth auth={auth} />} />
      </Routes>
    </>
  );
}

export default App;
