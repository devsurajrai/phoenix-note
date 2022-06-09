import "./header.css";
import { Link ,useNavigate} from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import { logout } from '../../util/logout';

const Header = () => {
  const { auth ,authDispatch} = useAuthContext();
  const {isLoggedIn}=auth
const navigate=useNavigate()

  return (
    <div className="header p-lr-md">
      <Link to="/" className="brand-name text-md m-lr-md ">
        PHOENIX<sub>NOTE</sub>
      </Link>
      <div>
       { !isLoggedIn?
       <>
       <Link to="/signup">
          <button className="button button--primary m-s">Sign Up</button>
        </Link>
        <Link to="/login" className="secondary-link text-sm" href="">
          Login
        </Link>
       </>:
       <button className="button button--primary m-s"
            onClick={() => logout(navigate, authDispatch)}
          >
            Logout
          </button>
       }
      </div>
    </div>
  );
};

export { Header };
