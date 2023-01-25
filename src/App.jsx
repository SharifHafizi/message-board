import Home from "./conponent/homepage";
import Project from "./conponent/project";
import About from "./conponent/about";
import "./App.css";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/project">Project</Link>
        </nav>
      </header>
    </>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
