import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    // return shop page after route

    if (user) {
      navigate("/");
    }
    createUserWithEmailAndPassword(email, password).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="form-container py-5">
      <div>
        <h3 className="form-title">Sign Up</h3>
        <form onSubmit={handleCreateUser}>
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
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={(event) => setConfirmPassword(event.target.value)}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p className="text-red-600 mb-5 mx-3">{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p className="mt-3 mb-5">
          Already have an account?
          <Link className="form-link" to="/login">
            Create a new account
          </Link>
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

export default SignUp;
