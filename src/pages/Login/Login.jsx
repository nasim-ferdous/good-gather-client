import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthPRovider";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { toast } from "react-toastify";

const Login = () => {
  const { signinUser, googleSignIn, forgetPasswordUser } =
    React.use(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signinUser(email, password)
      .then(() => {
        toast.success("Successfully logged in");
        navigate(location.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully logged in");
        navigate(location.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) return toast.error("Please enter your email first");
    forgetPasswordUser(email)
      .then(() => toast.success("Check your email for reset instructions"))
      .catch((error) => toast.error(error.message));
  };

  const inputClass =
    "w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all";
  const labelClass =
    "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2";

  return (
    <div className="min-h-screen flex items-center justify-center  p-6 transition-colors duration-300">
      <title>Login</title>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
        {/* Left Side: Login Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">
            Welcome <span className="text-emerald-600">Back!</span>
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className={inputClass}
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={labelClass}>Password</label>
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="text-xs font-bold text-emerald-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className={inputClass}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-emerald-600"
                >
                  {show ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 dark:hover:bg-slate-200 hover:cursor-pointer font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-emerald-600 py-3.5 rounded-xl font-semibold transition-all text-slate-700 dark:text-slate-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600 dark:text-slate-400">
            New here?{" "}
            <Link
              to="/register"
              className="text-emerald-600 font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>

        {/* Right Side: Decorative Welcome Note */}
        <div className="hidden lg:flex w-1/2 bg-emerald-600 p-12 flex-col justify-center text-white">
          <h2 className="text-4xl font-black mb-6">Join the Movement!</h2>
          <p className="text-emerald-100 text-lg leading-relaxed">
            Log in to discover and manage events in your community. Every action
            you take helps create a better, more sustainable world for everyone.
          </p>
          <div className="mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="font-semibold italic">
              "Unity is strength... when there is teamwork and collaboration,
              wonderful things can be achieved."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
