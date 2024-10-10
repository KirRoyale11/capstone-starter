import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { fetchBusinesses } from "../../../server/db";

function Businesses({ businesses }) {
  return (
    <div>
      <h1>Business List {businesses.length}</h1>
      <div className="business-list">
        {businesses?.map((business) => {
          return (
            <div className="business-card" key={business.id}>
              <h3>Name:{business.busname} </h3>
              <img src={business.busimage} />
              <p>Category: {business.category}</p>
              <p>About us: {business.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Businesses;
