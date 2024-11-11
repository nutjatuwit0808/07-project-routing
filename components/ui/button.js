import Link from "next/link";
import styles from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link className={styles.link} href={props.link}>
        <span className={styles.btn}>{props.children}</span>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
