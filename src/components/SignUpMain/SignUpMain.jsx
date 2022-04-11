import "./signup-main.css";
import { Link } from "react-router-dom";

import { useShowPassword } from "../../customHooks/customHooks";
import { useSignUpLoginValidateContext } from "../../contexts/signUpLoginValidationContext";
import { createUser } from "../../util/util";

export const SignUpMain = () => {
  const { signUpLoginValidationState, signUpLoginValidationDispatch } =
    useSignUpLoginValidateContext();
  const passInputType = useShowPassword();

  return (
    <div className="signup-page">
      <main>
        <form
          className="log-in-form sign-up-form p-xxl flex-c flex-center br-sm"
          onSubmit={(e) => createUser(e, signUpLoginValidationState)}
        >
          <h3>Signup</h3>
          <label className="text-sm lh-md login-label" for="firstName">
            First Name
            <input
              className="input-simple br-l m-b-md"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              required
              onBlur={(e) =>
                signUpLoginValidationDispatch({
                  type: "SET_FIRST_NAME",
                  payload: { value: e.target.value },
                })
              }
            />
          </label>
          <label className="text-sm lh-md login-label" for="lastName">
            Last Name
            <input
              className="input-simple br-l m-b-md"
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              required
              onBlur={(e) =>
                signUpLoginValidationDispatch({
                  type: "SET_LAST_NAME",
                  payload: { value: e.target.value },
                })
              }
            />
          </label>
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
              // type={
              //   !signUpLoginValidationState.isPassHidden ? "text" : "password"
              // }
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
          <label
            className=" text-sm lh-md login-label flex-r flex-center"
            for=""
          >
            <input
              className="input-checkbox m-r-s"
              type="checkbox"
              onChange={(e) =>
                signUpLoginValidationDispatch({
                  type: "SET_TC",
                  payload: {
                    value: !signUpLoginValidationState.isTermsCondChecked,
                  },
                })
              }
            />
            <span className="text-sm m-r-xl">
              I accept all Terms & Conditions
            </span>
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

          <button className="button button--secondary log-in-btn m-tb-md">
            Sign Up
          </button>
          <Link to="/login" className=" text-sm">
            <button className="create-new-acc flex-r flex-center">
              Already have an account
              <span className="text-md p-l-xs"> > </span>
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
};
