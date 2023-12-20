import styles from "./resourceLLink.module.css";
export default function ResourceLink({ data, no }) {
  return (
    <div
      className={styles.linkContainer}
      onClick={() => {
        const win = window.open(data?.link, "_blank");
        win.focus();
      }}
    >
      {/* <img></img> */}
      <h3>{no}</h3>
      <h3>{data?.resourceName.trim()}</h3>
      <h3 className={styles.auther}> {data?.createdBy?.name}</h3>
      <h3 className={styles.date}>
        {new Date(data?.createdAt).getDate()}/
        {new Date(data?.createdAt).getMonth()}/
        {new Date(data?.createdAt).getFullYear()}
      </h3>
    </div>
  );
}
