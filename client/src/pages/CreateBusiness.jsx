import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { use } from "../../../server/api";

function CreateBusiness({ businesses, auth }) {
  const [busName, setBusName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting business");

    try {
      console.log("first");
      console.log(busName);
      axios.post("http://localhost:3000/api/businesses", {
        busName,
        category,
        description,
        busimage: imageUrl,
      });
      console.log("second");
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to submit business.. try again.");
      }
      alert("Business added successfully!");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h2>Add your business here:</h2>
      <form className="business-form" onSubmit={handleSubmit}>
        <label>
          <input
            onChange={(e) => setBusName(e.target.value)}
            placeholder="Business Name"
          />
        </label>
        <br />
        <label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />
        </label>
        <br />
        <label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </label>
        <br />
        <label>
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          />
        </label>
        <br />
        <button type="submit">Add Business</button>
      </form>
    </div>
  );
}

export default CreateBusiness;
