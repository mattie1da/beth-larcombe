import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconBee, IconClose, IconFlower, IconOpen } from "../components/icons";
import utilStyles from "../styles/utils.module.scss";
import styles from "../styles/layouts/Navigation.module.scss";
import { Container } from "./Container";
import { NAVIGATION_CONSTANTS } from "../lib/constants/navigation";

// @ts-ignore
export const Navigation = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const checkWindowWidth = () => {
    setIsMobile(window.innerWidth < 899 ? true : false);
  };

  const checkScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    checkWindowWidth();
    checkScrollPosition();

    window.addEventListener("resize", checkWindowWidth, true);
    window.addEventListener("scroll", checkScrollPosition, true);

    return () => {
      window.removeEventListener("resize", checkWindowWidth, true);
      window.removeEventListener("scroll", checkScrollPosition, true);
    };
  }, [typeof window !== "undefined"]);

  return (
    <header>
      <nav
        className={classnames(styles.wrapper, {
          [styles.open]: menuOpen && isMobile,
          [styles.scrolling]: scrollPosition > 100,
        })}
      >
        <Container>
          <div
            className={classnames(styles.inner, {
              [styles.scrolling]: scrollPosition > 100,
            })}
          >
            <Link href="/">
              <a className={styles.icon} aria-label="Go to homepage">
                <IconBee />
              </a>
            </Link>
            <button className={styles.button} onClick={toggleMenu}>
              <span className={utilStyles.visuallyHidden}>
                {menuOpen ? "close" : "open"}
              </span>
              {menuOpen ? <IconClose /> : <IconOpen />}
            </button>
            {(menuOpen || !isMobile) && (
              <ul className={styles.list}>
                <li>
                  <Link href={NAVIGATION_CONSTANTS.projects.href}>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className={classnames(styles.link, {
                        [styles.active]:
                          NAVIGATION_CONSTANTS.projects.name === activeSection,
                      })}
                    >
                      {NAVIGATION_CONSTANTS.projects.name}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={NAVIGATION_CONSTANTS.about.href}>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className={classnames(styles.link, {
                        [styles.active]:
                          NAVIGATION_CONSTANTS.about.name === activeSection,
                      })}
                    >
                      {NAVIGATION_CONSTANTS.about.name}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={NAVIGATION_CONSTANTS.contact.href}>
                    <a
                      onClick={() => setMenuOpen(false)}
                      className={classnames(styles.link, {
                        [styles.active]:
                          NAVIGATION_CONSTANTS.contact.name === activeSection,
                      })}
                    >
                      {NAVIGATION_CONSTANTS.contact.name}
                    </a>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </Container>
      </nav>
    </header>
  );
};
