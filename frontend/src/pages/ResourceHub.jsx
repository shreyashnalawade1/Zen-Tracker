import ResourceGroup from "../features/resources/ResourceGroup";
import useResourceGroup from "../hooks/useResourceGroup";
import ActionBtn from "../ui/ActionBtn";
import styles from "./resourceHub.module.css";
export default function ResourceHub() {
  const { resourcesGroups } = useResourceGroup();

  return (
    <div className={styles.resourcesContainer}>
      <h1>Resources Hub</h1>
      <div className={styles.floderContainer}>
        {resourcesGroups?.data?.items?.map((el) => {
          console.log("D");
          return <ResourceGroup key={el._id} data={el}></ResourceGroup>;
        })}
      </div>
      <div className={styles.btnContainer}>
        <ActionBtn txt={"+"} active={true}></ActionBtn>
      </div>
    </div>
  );
}
