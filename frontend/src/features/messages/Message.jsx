import styles from "./message.module.css";
export default function Message({ data, recviever }) {
  const direction = data?.sender == recviever ? "left" : "right";
  return (
    <div
      className={styles.messageContainer}
      style={{
        alignSelf: direction === "left" ? "flex-start" : "flex-end",
        backgroundColor: direction === "left" ? "#E04D01" : "#000",
      }}
    >
      {data?.content}
    </div>
  );
}
