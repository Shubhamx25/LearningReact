import React from "react";
import img from "../Assets/Troll.jpg"

const Header = () => {
    return (
        <header>
          <div>
            <img src={img} alt="logo" />
            <h2>Meme generator</h2>
          </div>
          <div>
            <h4> A react course - project 4</h4>
          </div>
        </header>
    )
}

export default Header;