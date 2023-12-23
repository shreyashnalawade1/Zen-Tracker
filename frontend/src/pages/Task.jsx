import TaskContainer from "../features/tasks/taskContainer";
import styles from "./task.module.css";
export default function Task() {
  return (
    <div className={styles.app}>
      <h1>Task</h1>
      <TaskContainer></TaskContainer>
    </div>
  );
}
