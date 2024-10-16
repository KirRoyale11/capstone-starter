import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SingleBusiness() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    axios(`http://localhost:3000/api/businesses/${id}`)
      .then((response) => {
        console.log(response.data);
        setBusiness(response.data);
      })
      .catch((err) => console.log("error fetching business", err));
  }, [id]);

  return (
    <div>
      <h2>{business?.busname}</h2>
      <br></br>
      <img src={business?.busimage} />
      <br></br>
      <p>{business?.description}</p>
      <br></br>
      <h3>See reviews for {business?.busname}</h3>
    </div>
  );
}

export default SingleBusiness;
