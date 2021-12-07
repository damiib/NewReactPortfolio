import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("");
  return (
    <div>
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <span onClick={() => setPage("")}>Home</span>
            </li>
            <li>
              <span onClick={() => setPage("about")}>About</span>
            </li>
            <li>
              <span onClick={() => setPage("contact")}>Contact</span>
            </li>
            <li>
              <span onClick={() => setPage("portfolio")}>Portfolio</span>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      {page === "about" ? (
        <About />
      ) : page === "contact" ? (
        <Contact />
      ) : page === "portfolio" ? (
        <Portfolio />
      ) : (
        <div>
          <h1>This is my Home Page</h1>
        </div>
      )}
    </div>
  );
}

export default App;
