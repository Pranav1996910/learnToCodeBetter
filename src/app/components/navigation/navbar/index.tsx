import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Logo from "./Logo";
import Button from "./Button";
import styles from "./navbar.module.css";

const Navbar = ({
  toggle
}: {
  toggle: () => void
}) => {
  const pathname = usePathname()
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className={styles.navLinkContainer}>
              <li>
                <Link href={"/#aboutMe"}>
                  <p className={styles.navLink}>About us</p>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <p className={styles.navLink}>Courses</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p className={styles.navLink}>Upcoming</p>
                </Link>
              </li>
            </ul>
            {
              (!["/register", "/login"].includes(pathname))
              &&
              <div className={styles.authenticationButtons}>
                <Button text="Sign in" urlPath="/login" />
                <Button text="Sign up" urlPath="/register" />
              </div>
            }
            {
              (["/register", "/login"].includes(pathname))
              &&
              <div className={styles.authenticationButtons}>
              </div>
            }

            <button type="button" className={styles.burgerMenu}
              onClick={toggle}>
              {/* Menu icon */}
              <svg xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24">
                <path fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;