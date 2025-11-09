import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, googleSignIn, updateProfileUser, setUser } =
    use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }
    if (!regEx.test(password)) {
      toast.error(
        "Password must include at least one uppercase and one lowercase letter."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("successfully register");
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("successfully registered");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center text-emerald-700 font-bold">
            Register Now!
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
                required
              />
              {/* photo url */}
              <label className="label">Photo</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Photo Url"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
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
              <button
                type="submit"
                className="btn bg-emerald-600 hover:bg-emerald-700 mt-4"
              >
                Register
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
            Already registered? please{" "}
            <Link to={"/login"} className="text-emerald-600 font-bold">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
