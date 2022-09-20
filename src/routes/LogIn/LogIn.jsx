import { Link } from "react-router-dom";

// import the styles for the login page
import "./LogIn.scss";

const LogIn = () => {
  return (
    <main className="login-page">
      <div className="heading">
        <h1 className="main">Login</h1>
        <h3 className="sub">
          Log in using your institutional email and password
        </h3>
      </div>

      <form id="login-form" action="/home">
        <div className="formgroup">
          <label htmlFor="email" className="label">
            Your Bingham email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. your.name@binghamuni.edu.ng"
            required
          />
        </div>

        <div className="formgroup">
          <label htmlFor="password" className="label">
            Your BHU Guide password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type in your BHU Guide password here"
            required
          />
        </div>

        <Link className="forgot-password" to="/recover-password">
          I forgot my password
        </Link>

        <Link to="/home" className="btn btn--pri">
          Log in
        </Link>
        {/* <button type="submit" className="btn btn--pri">
          Log in
        </button> */}

        <Link className="not-registered" to="/signup">
          I don't have an account and I want to sign up
        </Link>
      </form>
    </main>
  );
};

export default LogIn;
