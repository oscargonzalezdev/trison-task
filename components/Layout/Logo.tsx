import styles from "./Layout.module.css";
import { GrRestaurant } from "react-icons/gr";

function Logo() {
  return (
    <div className={styles.logo}>
      <GrRestaurant />
      <span>Restaurant</span>
    </div>
  );
}

export default Logo;
