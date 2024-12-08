


import {useTheme} from "../context/ThemeContext"

const Navbar = () => {
    const {toggleTheme}=useTheme()
  return (
    <nav>
        <h1> Country Finder</h1>

        <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  )
}

export default Navbar
