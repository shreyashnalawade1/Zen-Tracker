// import useChat from "../../hooks/useChat";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import ActionBtn from "../../ui/ActionBtn";
import styles from "./chatUI.module.css";
import { fetchChat } from "../../services/chats";
import { getAllMessages } from "../../services/messages";
import Message from "../messages/Message";
import { useSearchParams } from "react-router-dom";
import useSendMessage from "../../hooks/useSendMessage";
import useUser from "../../hooks/useUser";

const ENDPOINT = "http://localhost:8000";
let socket;

export default function ChatUI({ data }) {
  const userId = data?._id;
  const { user } = useUser();
  const [chat, setChat] = useState();
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useSearchParams();
  const [sendMessage, setSendMessage] = useState();
  const { sendMessageFn } = useSendMessage();

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user?.data?.user);
  }, [user?.data?.user]);
  useEffect(() => {
    console.log("shreyash");
    socket.on("recived", (newMessage) => {
      //   console.log(chat, newMessage);
      if (!chat && chat?._id !== newMessage?.chat?._id) {
        //notification
      } else {
        const fn = async () => {
          if (!chat?._id) return;
          const x = await getAllMessages(chat?._id);
          setMessages(x?.data?.messages);
          socket.emit("join room", chatId.get("chatId"));
        };
        fn();
      }
    });
  });
  useEffect(() => {
    const fn = async () => {
      if (!userId) return;
      const x = await fetchChat(userId);
      setChat(x?.data?.chat);
      setChatId({ chatId: x?.data?.chat?._id });
    };
    fn();
  }, [userId, setChatId]);
  useEffect(() => {
    const fn = async () => {
      if (!chat?._id) return;
      const x = await getAllMessages(chat?._id);
      setMessages(x?.data?.messages);
      socket.emit("join room", chatId.get("chatId"));
    };
    fn();
  }, [chat?._id, chatId]);
  return (
    <div className={styles.container}>
      <h1> {data?.name}</h1>
      <h5>{chat?._id}</h5>
      <div className={styles.chatsContainer}>
        {messages.map((el) => (
          <Message data={el} key={el._id} recviever={userId}></Message>
        ))}
      </div>

      <form
        className={styles.btnContainer}
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(sendMessage);
          sendMessageFn(sendMessage);
          //   console.log(chat);
          socket.emit("new message", {
            chat,
            sendMessage,
          });
          setSendMessage("");
        }}
      >
        <input
          placeholder={"Send Message"}
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
        ></input>

        <ActionBtn txt={"Send"} active={false}></ActionBtn>
      </form>
    </div>
  );
}
