import { useState } from "react";
import ActionBtn from "../../ui/ActionBtn";
import styles from "./createTask.module.css";
import useCreateTask from "../../hooks/useCreateTask";
export default function CreateTask() {
  const [taskName, setTaskName] = useState();
  const [priority, setPriority] = useState();
  const [discription, setDiscription] = useState();
  const [state, setState] = useState();
  const [assign, setAssign] = useState();
  const [deadline, setDeadline] = useState();
  const { createTask } = useCreateTask();
  const [tags, setTags] = useState([]);
  const handleSubmit = function (e) {
    // console.log("shreyash");
    e.preventDefault();
    if (
      taskName &&
      priority &&
      discription &&
      state &&
      assign &&
      deadline &&
      tags
    ) {
      //   console.log("ddd");
      createTask({
        taskName,
        discription,
        priority,
        state,
        assigned: assign,
        deadLine: deadline,
        tags,
      });
    }
  };
  return (
    <div className={styles.createContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Create a Task</h1>
        <input
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></input>
        <textarea
          value={discription}
          placeholder="Discription"
          onChange={(e) => setDiscription(e.target.value)}
        ></textarea>
        <select
          name="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value={null}>--Please choose a priority--</option>
          <option value={"Heigh"}>High</option>
          <option value={"Low"}>Low</option>
          <option value={"Intermidate"}>Intermidate</option>
        </select>
        <select
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value={null}>--Please choose a state--</option>
          <option value={"todo"}>todo</option>
          <option value={"doing"}>doing</option>
          <option value={"done"}>done</option>
        </select>
        <input
          placeholder="Assign To"
          value={assign}
          onChange={(e) => setAssign(e.target.value)}
        ></input>

        <input
          placeholder="deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        ></input>
        <input
          placeholder="tags"
          value={tags}
          onChange={(e) => {
            let str = e.target.value;
            setTags(str.split(","));
          }}
        ></input>
        <ActionBtn txt={"Submit"}></ActionBtn>
      </form>
    </div>
  );
}
