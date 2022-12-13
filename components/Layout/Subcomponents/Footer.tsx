import styles from "../Layout.module.css";
import { FiHeart as Love } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

function Footer() {
  
  return (
    <div className={styles.footer}>
      <span>
        Made with <Love /> by
        <a
          className={styles.btn}
          href="https://oscarweb.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oscar Gonzalez
        </a>
      </span>
      |
      <a
        className={styles.btn}
        href="https://github.com/oscargonzalezdev/trison-task"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub /> View Code
      </a>
    </div>
  );
}

export default Footer;
