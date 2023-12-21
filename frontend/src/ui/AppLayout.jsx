import { Outlet } from "react-router";
import styles from "./appLayout.module.css";

export default function AppLayout() {
  return (
    <main className={styles.main}>
      <div className={styles.menu}></div>
      <Outlet></Outlet>
    </main>
  );
}
