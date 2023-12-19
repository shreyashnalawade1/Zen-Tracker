import styles from "./taskBox.module.css";
export default function TaskBox({ name, priority, deadline, assigned }) {
  let cl = "#9BFF1B";
  if (priority === "Heigh") {
    cl = "#E04D01";
  } else if (priority === "Intermidate") {
    cl = "#6556D8";
  }
  console.log(deadline);
  return (
    <div className={styles.taskBox} style={{ borderRight: `10px solid ${cl}` }}>
      {name.slice(0, 30)}
      <br></br>
      <span className={styles.deadline}>
        {" "}
        {new Date(deadline).getDate()}
        {" " + new Date(deadline).toLocaleString("default", { month: "long" })}
        {" " + new Date(deadline).getFullYear()}
      </span>
      <br></br>
      <span className={styles.assigned}>{assigned}</span>
    </div>
  );
}
