// import react router dependencies
import { Routes, Route, useLocation } from "react-router-dom";

// load styles
import "./App.scss";

// import components and routes
import Navbar from "./components/Navbar/Navbar";
import Index from "./routes/Index/Index";
import Home from "./routes/Home/Home";
import Blog from "./routes/Blog/Blog";
import People from "./routes/People/People";
import Places from "./routes/Places/Places";
import LogIn from "./routes/LogIn/LogIn";
import SignUp from "./routes/SignUp/SignUp";
import RecoverPassword from "./routes/RecoverPassword/RecoverPassword";

function App() {
  const location = useLocation();

  // stop the navbar from displaying if we are on certain pages
  const locationCheck = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup" ||
      location.pathname === "/recover-password"
    )
      return false;
    return true;
  };

  return (
    <>
      {locationCheck() && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/people" element={<People />} />
        <Route path="/places" element={<Places />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </>
  );
}

export default App;
