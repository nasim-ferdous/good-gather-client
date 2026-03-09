import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, googleSignIn, updateProfileUser, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).+$/;

    if (password.length < 6)
      return toast.error("Password should be at least 6 characters");
    if (!regEx.test(password))
      return toast.error(
        "Password must include at least one uppercase and one lowercase letter.",
      );

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Successfully registered");
            navigate(location.state || "/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully registered");
        navigate(location.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const inputClass =
    "w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all";
  const labelClass =
    "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2";

  return (
    <div className="min-h-screen flex items-center justify-center  p-6 transition-colors duration-300">
      <title>Register</title>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">
            Create <span className="text-emerald-600">Account</span>
          </h1>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="name"
                className={inputClass}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className={labelClass}>Photo URL</label>
              <input
                type="url"
                name="photo"
                className={inputClass}
                placeholder="https://..."
                required
              />
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                name="email"
                className={inputClass}
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label className={labelClass}>Password</label>
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
              className="w-full bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 dark:hover:bg-slate-200 hover:cursor-pointer font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all mt-4"
            >
              Register
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
              Sign up with Google
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-600 font-bold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Right Side: Visual/Branding */}
        <div className="hidden lg:flex w-1/2 bg-emerald-600 p-12 flex-col justify-center text-white">
          <h2 className="text-4xl font-black mb-6">Join our Community</h2>
          <p className="text-emerald-100 text-lg leading-relaxed">
            By creating an account, you gain the power to host cleanup drives,
            plant trees, and donate to causes that matter most.
          </p>
          <div className="mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="font-semibold italic">
              "Small acts, when multiplied by millions of people, can transform
              the world."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
