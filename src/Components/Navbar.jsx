import React from "react";
import cart from "../Image/cartLogo.png";
function Navbar() {
  return (
    <div className="navbarContainer">
      <div>
        <ul className="navbarList">
          <li className="navListItem">
            <img
              src="https://reeco.io/assets/logo.44b75468.svg"
              alt="Reeco"
              width="90px"
              height="25px"
            />
          </li>
          <li className="navListItem">Store</li>
          <li className="navListItem">Orders</li>
          <li className="navListItem">Analytics</li>
        </ul>
      </div>
      <div className="navHelloUser">
        <spam className="navListItem">
          {" "}
          <img className="cartlogo" src={cart} />{" "}
        </spam>
        <spam className="navListItem">Hello, User</spam>
      </div>
    </div>
  );
}

export default Navbar;
