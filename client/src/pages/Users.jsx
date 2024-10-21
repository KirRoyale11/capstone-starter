import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { fetchUsers } from "../../../server/api/users.js";

function Users({ users }) {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <h1>
        {" "}
        We have {users.length} users currently reviewing {businesses.length}{" "}
        businesses{" "}
      </h1>
      <div className="user-list">
        {users?.map(function (person) {
          return <div key={person.id}>Name: {person.username}</div>;
          <button onClick={() => navigate(`/userreviews/${person.id}`)}>
            See Reviews from {person.username}
          </button>;
        })}
      </div>
    </div>
  );
}
export default Users;
