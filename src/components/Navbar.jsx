
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>Country Finder</h1>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
