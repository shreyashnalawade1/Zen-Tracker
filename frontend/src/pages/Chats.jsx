import ChatBox from "../features/chats/ChatBox";
import styles from "./chats.module.css";
export default function Chats() {
  return (
    <div className={styles.chatContainer}>
      <h1>Chats</h1>
      <div className={styles.Contianer}>
        <div className={styles.contacts}>
          <input placeholder="&#128269;Search"></input>
          <div className={styles.contactsContainer}>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>

            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
            <ChatBox></ChatBox>
          </div>
        </div>
        <div className={styles.chat}></div>
      </div>
    </div>
  );
}
