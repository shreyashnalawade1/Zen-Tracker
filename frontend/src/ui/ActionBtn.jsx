/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./actionBtn.module.css";
export default function ActionBtn({
  txt,
  path,
  active = false,
  handleClick = null,
}) {
  if (path) {
    // ("fuck");
    return (
      <button
        className={styles.button}
        style={{ backgroundColor: active ? "#e04d01" : "#000" }}
      >
        {/* {txt} */}
        <NavLink to={path}> {txt}</NavLink>
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      className={styles.button}
      style={{ backgroundColor: active ? "#e04d01" : "#000" }}
    >
      {txt}
    </button>
  );
}
