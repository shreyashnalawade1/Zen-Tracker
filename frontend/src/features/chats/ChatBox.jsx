import useUser from "../../hooks/useUser";
import styles from "./chatBox.module.css";

export default function ChatBox({ data, handleClick }) {
  // console.log(data.users);
  const { user } = useUser();
  const reciverName =
    data?.users[0]?._id == user?.data?.user?._id
      ? data?.users[1]
      : data?.users[0];
  // console.log(reciverName);
  return (
    <div
      className={styles.chatBoxContainer}
      onClick={() => handleClick(reciverName)}
    >
      <span>{reciverName?.name}</span>

      <span>{new Date(data?.updatedAt).toLocaleTimeString()} </span>
      <span> {data?.latestMessage?.content.slice(0, 30)}..</span>
    </div>
  );
}
