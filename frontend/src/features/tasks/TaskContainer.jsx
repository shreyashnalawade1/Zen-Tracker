// import { useMutation } from "@tanstack/react-query";
import useTask from "../../hooks/useTask";
import ActionBtn from "../../ui/ActionBtn";
import styles from "./taskContainer.module.css";
import useUpdateTask from "../../hooks/useUpdateTask";
import useDeleteTask from "../../hooks/useDeleteTask";
export default function TaskContainer() {
  const { task } = useTask();
  const { updateTask } = useUpdateTask();
  const { deleteTask } = useDeleteTask();
  // console.log(task?.data?.item?.state);
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1>{task?.data?.item?.taskName}</h1>
        <ActionBtn
          txt={"Delete Task"}
          handleClick={() => {
            console.log("fuck");
            deleteTask();
          }}
        ></ActionBtn>
      </div>
      <div className={styles.tableContainer}>
        <span>Task Id:</span>
        <span>{task?.data?.item?._id}</span>
        <span>Priority:</span>
        <span style={{ color: "#E04D01", fontWeight: "bold" }}>
          {task?.data?.item?.priority}
        </span>
        <span>Assigned:</span>
        <span>{task?.data?.item?.assigned?.name}</span>
        <span>Tags:</span>
        <span className={styles.tagsContainer}>
          {task?.data?.item?.tags.map((el) => {
            // console.log(el);
            return <span key={el}>{el}</span>;
          })}
        </span>
        <span>Deadline:</span>
        <span>
          {new Date(task?.data?.item?.deadLine).toLocaleString("en-GB", {
            timeZone: "UTC",
          })}
        </span>
        <span>Description:</span>
        <span>{task?.data?.item?.discription}</span>
      </div>
      <div className={styles.btnContainer}>
        <ActionBtn
          txt={"To Do"}
          active={task?.data?.item?.state === "todo"}
          handleClick={(e) => {
            console.log("A");
            updateTask({
              state: e.target.textContent.split(" ").join("").toLowerCase(),
            });
          }}
        ></ActionBtn>
        <ActionBtn
          txt={"Doing"}
          active={task?.data?.item?.state === "doing"}
          handleClick={(e) => {
            console.log("A");
            updateTask({
              state: e.target.textContent.split(" ").join("").toLowerCase(),
            });
          }}
        ></ActionBtn>
        <ActionBtn
          txt={"Done"}
          active={task?.data?.item?.state === "done"}
          handleClick={(e) => {
            console.log("A");
            updateTask({
              state: e.target.textContent.split(" ").join("").toLowerCase(),
            });
          }}
        ></ActionBtn>
      </div>
    </div>
  );
}
