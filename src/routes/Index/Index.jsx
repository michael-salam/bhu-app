import { Link } from "react-router-dom";

// load styles
import "./Index.scss";

const Index = () => {
  return (
    <main className="index-page">
      <h1 className="heading">Welcome to BHU Guide</h1>
      <div className="actions">
        <Link to="/signup" className="btn btn--pri signup">
          Sign up
        </Link>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link login">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Index;
