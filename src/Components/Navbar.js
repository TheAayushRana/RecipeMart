import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const imgStyle = {
    height: "35px",
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <Link className="navbar-brand" to="/">
          <h3 className="text-light">
            <img className="m-2" src={Logo} alt="" style={imgStyle} />
            Recipe App
          </h3>
        </Link>
      </nav>
    </div>
  );
}
