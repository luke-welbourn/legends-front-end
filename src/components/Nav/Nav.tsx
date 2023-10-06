import "./Nav.scss";
import { Link } from "react-router-dom";
import league from "./../../Data/Images/lol-logo-small.jpeg";
import createImage from "./../../Data/Images/create-image-2.png";
import leagueLogo from "./../../Data/Images/lol-logo.png";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        <img src={leagueLogo} className="create-image" />
      </Link>

      <Link className="nav__item" to="/legends">
        <img src={league} className="legends-image" />
      </Link>

      <Link className="nav__item" to="/legends/create">
        <img src={createImage} className="create-image" />
      </Link>
    </div>
  );
};

export default Nav;
