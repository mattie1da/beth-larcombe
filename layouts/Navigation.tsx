import classnames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { IconBee } from "../components/icons";
import styles from "../styles/layouts/Navigation.module.scss";

// import a context to write open nav state to

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={classnames(styles.wrapper, {
        [styles.open]: menuOpen,
      })}
    >
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.icon}>
            <IconBee />
          </a>
        </Link>
        <button onClick={toggleMenu}>{menuOpen ? "close" : "open"}</button>
      </div>

      {menuOpen && (
        <ul className="">
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
