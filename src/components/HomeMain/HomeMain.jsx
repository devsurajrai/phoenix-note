import "./home-main.css";
import HomepageSVG from "../../Assets/SVG/homepage.svg";
import { Link } from "react-router-dom";

export const HomeMain = () => {
  return (
    <div className="home-main flex-r flex-center">
      <div className="home-main__child flex-r flex-center p-lr-md">
        <div className="home-main__child--heading m-l-xxl ">
          <h1>Phoenix Note</h1>
          <h1>Says Hello.</h1>
          <p>
            Phoenix Note provides you all the tools needed to plan your day
            better 😌.
          </p>
          <Link to="/signup">
            <button className="button button--primary btn-l ">
              Get Started
            </button>
          </Link>
        </div>
        <div className="m-r-xxl">
          <img className="res-img " src={HomepageSVG} alt="notebook" />
        </div>
      </div>
    </div>
  );
};
