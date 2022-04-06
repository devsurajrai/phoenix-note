import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header p-lr-md">
      <Link to="/" className="brand-name text-md m-lr-md ">
        PHOENIX<sub>NOTE</sub>
      </Link>
      <div>
        <Link to="/signup">
          <button className="button button--primary m-s">Sign Up</button>
        </Link>
        <Link to="/login" className="secondary-link text-sm" href="">
          Login
        </Link>
      </div>
    </div>
  );
};

export { Header };
