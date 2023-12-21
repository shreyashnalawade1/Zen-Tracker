import { useNavigate } from "react-router";
import ActionBtn from "../../ui/ActionBtn";
import styles from "./projectBox.module.css";
export default function ProjectBox({ data, no }) {
  const navigate = useNavigate();
  return (
    <div className={styles.projectBox}>
      <h3>{no}.</h3>
      <h3> {data?.projectName}</h3>
      <ActionBtn
        txt={"View Task"}
        handleClick={() => {
          navigate(`/tasks/${data?._id}`);
        }}
      ></ActionBtn>
      <ActionBtn
        txt={"View Resources"}
        handleClick={() => {
          navigate(`/resources/${data?._id}`);
        }}
      ></ActionBtn>
    </div>
  );
}
