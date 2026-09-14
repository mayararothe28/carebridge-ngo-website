import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    // Registered user get karo
    const savedUser = JSON.parse(
      localStorage.getItem("carebridgeUser")
    );

    // Agar registration nahi kiya
    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    // Email/password check
    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");

      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-left">

          <p className="login-label">WELCOME BACK</p>

          <h1>Welcome to CareBridge</h1>

          <p>
            Together We Care. Together We Change.
            Login to continue your journey with our community.
          </p>

          <div className="login-benefit">

            <i className="bi bi-heart-fill"></i>

            <div>
              <h5>Make a Difference</h5>
              <p>
                Support meaningful causes and help communities.
              </p>
            </div>

          </div>

          <div className="login-benefit">

            <i className="bi bi-people-fill"></i>

            <div>
              <h5>Join Our Community</h5>
              <p>
                Connect with people working towards positive change.
              </p>
            </div>

          </div>

        </div>

        <div className="login-form-wrapper">

          <p className="login-form-label">LOGIN</p>

          <h2>Sign In</h2>

          <p className="login-description">
            Enter your registered email and password.
          </p>

          <form onSubmit={handleLogin}>

            <div className="mb-3">

              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">
              Register here
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;