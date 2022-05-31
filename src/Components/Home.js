import React from 'react'
import Search from "./Search.js"
import Burger from "./Images/Burger.png"
export default function Home() {
    const imgStyle = {
        display: "block",
        margin: "0 auto",
        width:"150px"
      };
    return (
        <div className="mt-3">
            <h1 className="text-center">WELCOME TO RECIPE+ APP</h1>
            <p className="text-center">Get Recipe of any Food Item</p>
            <img src={Burger} alt=""  style={imgStyle}/>
            <Search />
            {/* <div className="text-center">
                <button className="btn btn-outline-primary my-2 my-sm-0 mr-sm-2 font-weight-bold" type="submit"><Link to="/login">Login</Link></button>
                <button className="btn btn-outline-success my-2 my-sm-0 font-weight-bold" type="submit"><Link to="/register">Register</Link></button>
            </div> */}
        </div>
    )
}
