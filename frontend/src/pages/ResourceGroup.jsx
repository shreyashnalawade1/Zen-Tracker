import { useNavigate } from "react-router";
import ResourceLink from "../features/resources/ResourceLink";
import useResource from "../hooks/useResource";
import ActionBtn from "../ui/ActionBtn";
import styles from "./resourceGroup.module.css";

export default function ResourceGroup() {
  const { resources } = useResource();
  const navigate = useNavigate();
  console.log(resources);
  return (
    <div className={styles.resourceContainer}>
      <h1>Resources</h1>
      <div
        className={styles.resourceGroupContainer}
        onClick={() => {
          navigate("/");
        }}
      >
        <h2>UI UX Design</h2>
        {resources?.data?.items?.map((el, i) => (
          <ResourceLink data={el} key={el._id} no={i + 1}></ResourceLink>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <ActionBtn active={true} txt={"+"}></ActionBtn>
      </div>
    </div>
  );
}
