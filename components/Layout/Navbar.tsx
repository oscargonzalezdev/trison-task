import styles from "./Layout.module.css";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "./Logo";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles.navbarIcon} onClick={handleShowNavbar}>
        {showNavbar ? <MdClose /> : <MdMenu />}
      </div>
      <div className={`${styles.navbarItems}  ${showNavbar && styles.active}`}>
        <ul>
          <li>
            <Link href="/menu" onClick={handleShowNavbar}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleShowNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
