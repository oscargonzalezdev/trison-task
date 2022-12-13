import styles from "../Layout.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "./Logo";
import axios from "axios";
import { BiArrowBack as Back } from "react-icons/bi";

interface MenuItem {
  id: string;
  name: string;
  details: string;
  image: string;
  type: any;
}

function Navbar() {
  
  const [showNavbar, setShowNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMenuItems(response.data.menu.items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleBack = () => {
    setDropdown(false);
  };

  const closeMenu = () => {
    setShowNavbar(false);
    setDropdown(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" onClick={closeMenu}>
          <Logo />
        </Link>
        <div className={styles.navbarIcon} onClick={handleShowNavbar}>
          {showNavbar ? <MdClose /> : <MdMenu />}
        </div>
        <div className={`${styles.navbarItems} ${showNavbar && styles.active}`}>
          <ul>
            <li className={`${styles.dropdown} ${dropdown && styles.active}`}>
              <Link href="#" className={styles.link} onClick={handleDropdown}>
                Menu
              </Link>
              <div
                className={`${styles.dropdownMenu} ${
                  dropdown && styles.active
                }`}
              >
                <Link href="#" className={styles.backLink} onClick={handleBack}>
                  <Back /> Back
                </Link>
                {isLoading ? (
                  <p>Loading menu...</p>
                ) : (
                  <section>
                    {menuItems.map((menu) => (
                      <div key={menu.id} className={styles.menuContainer}>
                        <Link href={`/menu/${menu.id}`} onClick={closeMenu}>
                          <div
                            className={styles.menuInfo}
                            style={{ backgroundImage: `url(${menu.image})` }}
                          >
                            <h2>{menu.name}</h2>
                            <p>{menu.type.name}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </section>
                )}
              </div>
            </li>
            <li>
              <Link href="/contact" className={styles.link} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
