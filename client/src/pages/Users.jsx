import React, { useEffect, useState } from "react";

// import { fetchUsers } from "../../../server/api/users.js";

function Users({ users }) {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <h1>User List {users.length}</h1>
      <div className="user-list">
        {users?.map((user) => {
          return <div key={user.id}>Name: {user.username}</div>;
        })}
      </div>
    </>
  );
}
export default Users;
