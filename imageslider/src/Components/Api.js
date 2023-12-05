import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Api.css"

function Api() {
  const [apiData, setApiData] = useState([]);
 

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        console.log(response);
        setApiData(response.data);
      
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      
      });
  }, []);

  function handleClick(e ,data) {
    
  }

  return (
    <div className="wrapper">
      <h2>API:</h2>
     
        {
          apiData.map((data, index) => {
             return<div className="product" key={index}>
              <h3>{data.title}</h3>
              <p>{data.price}</p>
              <div className="productImage">
                <img src={data.image} alt="" />
              </div>
              <button onClick={(e) => handleClick(e,data)}>Add to cart</button>
            </div>
          
        })}
  
          
    
    </div>
  );
}

export default Api;

