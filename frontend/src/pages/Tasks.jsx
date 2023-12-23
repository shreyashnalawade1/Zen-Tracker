// import { useParams } from "react-router";
import TasksContainer from "../features/tasks/TasksContainer";
import useTasks from "../hooks/useTasks";
import styles from "./tasks.module.css";
export default function Tasks() {
  //   const { projectId } = useParams();
  const { tasks } = useTasks();
  return (
    <div className={styles.app}>
      <h1>Tasks</h1>
      <div className={styles.container}>
        <TasksContainer
          name={"To Do"}
          data={tasks}
          shbtn={true}
        ></TasksContainer>
        <TasksContainer name={"Doing"} data={tasks}></TasksContainer>
        <TasksContainer data={tasks} name={"Done"}></TasksContainer>
      </div>
    </div>
  );
}
