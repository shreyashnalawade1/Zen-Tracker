import styles from "./chatSearch.module.css";
export default function ChatSearch({ data, handleClick }) {
  return (
    <div className={styles.container} onClick={() => handleClick(data)}>
      <span>{data?.name}</span>
      <br></br>
      <span> {data?.email}</span>
    </div>
  );
}
