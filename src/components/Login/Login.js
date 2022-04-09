import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
  }
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container py-5">
      <div>
        <h3 className="form-title">Login</h3>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={(event) => setEmail(event.target.value)}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p className="text-red-600">{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="login" required />
        </form>
        <p className="mt-3 mb-5">
          New to Ema-jhon ?{" "}
          <Link className="form-link" to="/signup">
            Create a new account
          </Link>{" "}
        </p>
        <div className="line flex justify-center mb-6">
          <span>__________________ or</span>
          <span>__________________</span>
        </div>
        <div className="flex justify-center mb-4">
          <button className="border-2 rounded-lg px-4 py-2">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
