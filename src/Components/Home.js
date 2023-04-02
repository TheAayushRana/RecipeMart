import React from "react";
import Search from "./Search.js";
import Burger from "./Images/Burger.png";

export default function Home() {
  const imgStyle = {
    display: "block",
    width: "50px",
  };
  return (
    <div className="my-5">
      <h1 className="text-center">RECEIPE MART</h1>
      <div className="d-flex justify-content-center align-items-center text-muted"><h5>Get Recipe of any Food Item</h5> <img src={Burger} alt="" style={imgStyle} /></div>
      <Search />
    </div>
  );
}
