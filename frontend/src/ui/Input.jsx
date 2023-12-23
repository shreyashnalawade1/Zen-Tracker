import styles from "./input.module.css";
/* eslint-disable react/prop-types */
export default function Input(props) {
  const { name, val, setVal } = props;
  return (
    <input
      className={styles.input}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      placeholder={name}
    ></input>
  );
}
