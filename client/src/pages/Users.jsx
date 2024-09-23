import React, { useEffect, useState } from "react";
import axios from "axios";
// import { fetchUsers } from "../../../server/api/users.js";

const Users = ({ users }) => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    axios();
  });
  return <h1>Placeholder for Users {users.length}</h1>;
};

export default Users;
