import { useParams } from "react-router";
import ActionBtn from "../../ui/ActionBtn";
import styles from "./taksContainer.module.css";
import TaskBox from "./taskBox";
// import TaskBox from "./taskBox";
export default function TasksContainer({ name, shbtn, data }) {
  const { projectId } = useParams();

  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.taskBox}>
        {data &&
          data.data.items.map((el) => {
            // console.log(el);
            // console.log(el.state, );
            if (el.state !== name.split(" ").join("").toLowerCase()) return;
            return (
              <TaskBox
                key={el._id}
                name={el.taskName}
                priority={el.priority}
                deadline={el.deadLine}
                assigned={el?.assigned?.name}
                task={el?._id}
              ></TaskBox>
            );
          })}
      </div>
      {shbtn && (
        <ActionBtn txt="Add New" path={`/create-task/${projectId}`}></ActionBtn>
      )}
    </div>
  );
}
