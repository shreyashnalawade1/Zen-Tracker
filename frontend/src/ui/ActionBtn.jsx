/* eslint-disable react/prop-types */
import styles from "./actionBtn.module.css";
export default function ActionBtn({ txt }) {
  return <button className={styles.button}>{txt}</button>;
}
