import { Outlet } from "react-router";
import styles from "./appLayout.module.css";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </main>
  );
}
