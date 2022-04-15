import "./login-main.css";
import { Link } from "react-router-dom";
import { useShowPassword } from "../../customHooks/customHooks";
import { useSignUpLoginValidateContext } from "../../contexts/signUpLoginValidationContext";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../util/login/loginUser";
import { useAuthContext } from "../../contexts/authContext";

const LoginMain = () => {
  const { signUpLoginValidationDispatch, signUpLoginValidationState } =
    useSignUpLoginValidateContext();
  const navigate = useNavigate();
  const location = useLocation();
  const passInputType = useShowPassword();
  const { setAuth } = useAuthContext();

  return (
    <main class="login-main">
      <form
        className="log-in-form p-xxl flex-c flex-center br-sm"
        onSubmit={(e) =>
          loginUser(e, signUpLoginValidationState, location, navigate, setAuth)
        }
      >
        <h3>Login</h3>
        <label className="text-sm lh-md login-label" for="username">
          Email
          <input
            className="input-simple br-l m-b-md"
            type="email"
            placeholder="Enter Email"
            name="email"
            onBlur={(e) =>
              signUpLoginValidationDispatch({
                type: "SET_EMAIL",
                payload: { value: e.target.value },
              })
            }
            required
          />
        </label>

        <label className=" text-sm lh-md login-label" for="password">
          Password
          <input
            className="input-simple br-l m-b-s"
            type={passInputType}
            placeholder="Enter Password"
            name="password"
            onBlur={(e) =>
              signUpLoginValidationDispatch({
                type: "SET_PASSWORD",
                payload: { value: e.target.value },
              })
            }
            required
          />
        </label>

        <label className=" text-sm lh-md login-label flex-r flex-sb">
          <label className="flex-r flex-center">
            <input className="input-checkbox m-r-s" type="checkbox" />
            <span className="text-sm m-r-xl">Keep me logged in</span>
          </label>
          <label>
            <span
              className="button btn-sm show-pass-btn"
              onClick={(e) =>
                signUpLoginValidationDispatch({
                  type: "SET_HIDE_PASS",
                  payload: { value: !signUpLoginValidationState.isPassHidden },
                })
              }
            >
              Show Password
            </span>
          </label>
        </label>

        <button className="button button--secondary log-in-btn m-tb-md">
          LOG IN
        </button>
        <Link to="/signup">
          <button className="create-new-acc flex-r flex-center">
            Create a new account
            <span className="text-md p-l-xs"> > </span>
          </button>
        </Link>
      </form>
    </main>
  );
};

export { LoginMain };
