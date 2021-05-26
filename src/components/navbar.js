import * as React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "rebeccapurple",
        padding: "0.8em 0",
        margin: "1em 0",
        fontFamily: "Poppins, sans-serfi",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", fontSize: 14 }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: "white", textDecoration: "none", fontSize: 14 }}
        >
          About
        </Link>
        <Link
          to="/blogs"
          style={{ color: "white", textDecoration: "none", fontSize: 14 }}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          style={{ color: "white", textDecoration: "none", fontSize: 14 }}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
