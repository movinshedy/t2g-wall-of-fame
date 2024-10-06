import React from "react";
import salad1 from "../../images/salad1";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <img src={salad1} alt="" />

      <div>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>

          <li>
            <Link to="">About</Link>
          </li>

          <li>
            <Link to="">Skills</Link>
          </li>

          <li>
            <Link to="">Projects</Link>
          </li>

          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
