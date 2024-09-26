import React, { useEffect, useState } from "react";

const Businesses = ({ businesses }) => {
  const [businessData, setBusinessData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/businesses`);
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch businesses");
        }
        const data = await response.json();
        console.log(data);
        setBusinessesData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchBusinesses();
  }, []);
  return (
    <div>
      <h1>Business List {businesses.length}</h1>
      <div className="business-list">
        {businessData?.map((business) => {
          return <div key={business.id}> {business.busName} </div>;
        })}
      </div>
    </div>
  );
};

export default Businesses;
