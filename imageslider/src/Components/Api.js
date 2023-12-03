import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setApiData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Hello</h1>
     
     
    </div>
  );
}

export default Api;
