import { useState } from "react";
import ChatBox from "../features/chats/ChatBox";
import useChats from "../hooks/useChats";
import styles from "./chats.module.css";
import useSearchUsers from "../hooks/useSearchUsers";
import { useQueryClient } from "@tanstack/react-query";
import ChatSearch from "../features/chats/ChatSearch";
import ChatUI from "../features/chats/ChatUI";
export default function Chats() {
  const { chats } = useChats();
  const [search, setSearh] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  const [openChat, setOpenChat] = useState("");
  const queryClient = useQueryClient();
  const { searchUsers } = useSearchUsers();
  const handleClick = function (data) {
    setOpenChat(data);
  };
  return (
    <div className={styles.chatContainer}>
      <h1>Chats</h1>
      <div className={styles.Contianer}>
        <div className={styles.contacts}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const x = queryClient.getQueryData(["searchUser"]);
              setSearchUser(x?.data?.users);
              setSearh("");
            }}
          >
            <input
              placeholder="&#128269;Search"
              value={search}
              onChange={(e) => {
                setSearh(e.target.value);
                searchUsers(e.target.value);
              }}
            ></input>
          </form>
          <div className={styles.contactsContainer}>
            {chats?.data?.chat &&
              search.length === 0 &&
              chats?.data?.chat?.map((el) => {
                return (
                  <ChatBox
                    handleClick={handleClick}
                    data={el}
                    key={el._id}
                  ></ChatBox>
                );
              })}
            {search.length != 0 &&
              [...searchUser]?.map((el) => {
                return (
                  <ChatSearch
                    data={el}
                    act={false}
                    key={el._id}
                    handleClick={handleClick}
                  ></ChatSearch>
                );
              })}
          </div>
        </div>
        <div className={styles.chat}>
          {openChat && <ChatUI data={openChat}></ChatUI>}
        </div>
      </div>
    </div>
  );
}
