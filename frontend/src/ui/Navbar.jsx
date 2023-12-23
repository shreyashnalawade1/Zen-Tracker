import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import chat from "../assets/icons/chat.png";
import profile from "../assets/icons/profile.png";
import useUser from "../hooks/useUser";

export default function Navbar() {
  const { user } = useUser();
  return (
    <div className={styles.navbar}>
      <Link to={"chats"}>
        <img className={styles.link} src={chat}></img>
      </Link>
      <Link to={`projects/${user?.data?.user?._id}`}>
        <img className={styles.link} src={profile}></img>
      </Link>
    </div>
  );
}
