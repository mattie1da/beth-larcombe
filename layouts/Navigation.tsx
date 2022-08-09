import Link from "next/link";
import { useState } from "react";

// import a context to write open nav state to

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link href="/">bee</Link>
      <button onClick={toggleMenu}>{menuOpen ? "close" : "open"}</button>

      {menuOpen && (
        <ul>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
