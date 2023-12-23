/* eslint-disable react/prop-types */
import styles from "./form.module.css";
export default function Form({ children, handleSubmit }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
