import "./landing-page.css";
import HomepageSVG from "../../Assets/SVG/homepage.svg";
import { Link } from "react-router-dom";

export const LandingMain = () => {
  return (
    <div className="landing-main flex-r flex-center">
      <div className="landing-main__child flex-r flex-center p-lr-md">
        <div className="landing-main__child--heading m-l-xxl ">
          <h1>Phoenix Note</h1>
          <h1>Says Hello.</h1>
          <p>
            Phoenix Note provides you all the tools needed to plan your day
            better 😌.
          </p>
          <Link to="/home">
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
