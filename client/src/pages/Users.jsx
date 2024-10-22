import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// changes
// more change s

function Users({ users }) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>DoubleCheck has {users.length} users currently contributing</h2>
      {users?.map(function (person) {
        return (
          <div className="main-layout" key={person.id}>
            <div className="user-card">Name: {person.username}</div>
            <button onClick={() => navigate(`/users/${person.id}`)}>
              See User Reviews
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Users;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// // import { fetchBusinesses } from "../../../server/db";
// // import { fetchUsers } from "../../../server/api/users.js";

// function Users({ users }) {
//   const [usersData, setUsersData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   return (

//     <>
//       <h2> We have {users.length} users currently contributing </h2>
//       <div className="user-list">
//        <div>{users?.map(function (person) {
//           return (<p key={person?.id}>Name: {person?.username}</p>
//           <Link to="/users">See user reviews</Link>;</div>
//         )
//         })}

//         <br />
//         </>
//       </div>
//   );
// }
// export default Users;
