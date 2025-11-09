import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthPRovider";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { toast } from "react-toastify";

const Login = () => {
  const { signinUser, googleSignIn, forgetPasswordUser } = use(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signinUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("successfully Login");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success("successfully Login");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleForgetPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    forgetPasswordUser(email)
      .then(() => {
        toast.success("Check your Email");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center text-emerald-700  font-bold">
            Login now!
          </h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                // ref={emailRef}
                name="email"
                ref={emailRef}
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={() => setShow(!show)}
                  type="button"
                  className="btn btn-xs bg-emerald-600 hover:bg-emerald-700 absolute top-6 right-5"
                >
                  {show ? <LuEye /> : <LuEyeClosed />}
                </button>
              </div>
              <div>
                <a
                  onClick={handleForgetPassword}
                  type="button"
                  className="link link-hover text-emerald-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn bg-emerald-600 text-white hover:bg-emerald-700 border-none"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn bg-emerald-500 text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
          </form>

          <p>
            New here? please{" "}
            <Link to={"/register"} className="text-emerald-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
