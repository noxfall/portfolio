import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = () => {

  return (
    <nav className="w-full flex justify-between items-center max-w-7x1 mx-auto">
      <div>
        <Link to="/" className="flex flex-row items-center">
          <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
          <p>Milos&nbsp;<span>| Noxfall Labs, Inc.</span></p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;