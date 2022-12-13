import styles from "../Layout.module.css";
import { GrRestaurant } from "react-icons/gr";

function Logo({size}) {

  return (
    <div className={styles.logo}>
      <GrRestaurant style={{fontSize: `${size}`}} />
      <span style={{fontSize: `${size}`}}>Restaurant</span>
    </div>
  );
}

export default Logo;
