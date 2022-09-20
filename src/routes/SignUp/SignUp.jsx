import { Link } from "react-router-dom";
// import the styles for the signup page
import "../LogIn/LogIn.scss";

const SignUp = () => {
  return (
    <main className="signup-page">
      <div className="heading">
        <h1 className="main">Sign Up</h1>
        <h3 className="sub">
          Follow an easy process to register and start using the app
        </h3>
      </div>

      <form id="signup-form" action="/home">
        <div className="formgroup">
          <label htmlFor="firstname" className="label">
            Firstname:
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="e.g. John"
            required
          />
        </div>

        <div className="formgroup">
          <label htmlFor="lastname" className="label">
            Last name:
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="e.g. Oluseyi"
            required
          />
        </div>

        <div className="formgroup">
          <label htmlFor="email" className="label">
            Bingham email:
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
            BHU Guide password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type in your BHU Guide password here"
            required
          />
        </div>

        {/* <button type="submit" className="btn btn--pri">
          Sign up
        </button> */}

        <Link to="/home" className="btn btn--pri">
          Sign up
        </Link>

        <Link className="already-registered" to="/login">
          I already have an account and I want to login
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
