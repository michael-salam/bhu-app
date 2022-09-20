// import the styles for the login page
import { Link } from "react-router-dom";
import "./LogIn.scss";

const LogIn = () => {
  return (
    <main className="login-page">
      <h1>Welcome to the Login page</h1>
      <h2>Log into the app using your institutional email and password</h2>
      <Link to="/home">Go to home</Link>
    </main>
  );
};

export default LogIn;
