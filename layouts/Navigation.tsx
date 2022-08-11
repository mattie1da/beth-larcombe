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
    <header>
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
          <ul className={styles.list}>
            <li>
              <Link href="/#projects">
                <a onClick={() => setMenuOpen(false)} className={styles.link}>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a onClick={() => setMenuOpen(false)} className={styles.link}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a onClick={() => setMenuOpen(false)} className={styles.link}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        )}

        <aside className={styles.orb}></aside>
      </nav>
    </header>
  );
};
