import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { fetchBusinesses } from "../../../server/db";

function Businesses({ businesses }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Business List {businesses.length}</h2>
      <div className="business-container">
        {businesses?.map((business) => {
          return (
            <div className="business-card" key={business.id}>
              <h3>Name:{business.busname} </h3>
              <img src={business.busimage} />
              <p>Category: {business.category}</p>
              <p>About us: {business.description}</p>
              <br></br>
              <button onClick={() => navigate(`/businesses/${business.id}`)}>
                See Details
              </button>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Businesses;
