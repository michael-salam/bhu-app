// import react router dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// load styles
import "./App.scss";

// import components and routes
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home/Home";
import LogIn from "./routes/LogIn/LogIn";
import SignUp from "./routes/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
