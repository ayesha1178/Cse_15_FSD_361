import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginPage">
      <div className="loginBox">

        <h1>NETFLIX</h1>

        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Sign In
        </button>

        <Link to="/">
          <button className="backBtn">
            Back Home
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Login;