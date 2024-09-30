import React, { useEffect, useState } from "react";
// import { fetchBusinesses } from "../../../server/db";

function Businesses({ businesses }) {
  // const [businessData, setBusinessData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  return (
    <div>
      <h1>Business List {businesses.length}</h1>
      <div className="business-list">
        {businesses?.map((business) => {
          return <div key={business.id}> Name:{business.busname} </div>;
        })}
      </div>
    </div>
  );
}

export default Businesses;
