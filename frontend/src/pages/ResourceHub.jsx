import { useState } from "react";
import ResourceGroup from "../features/resources/ResourceGroup";
import useResourceGroup from "../hooks/useResourceGroup";
import ActionBtn from "../ui/ActionBtn";
import Overlay from "../ui/Overlay";
import styles from "./resourceHub.module.css";
import useCreateResourceGroup from "../hooks/useCreateResourceGroup";
export default function ResourceHub() {
  const { resourcesGroups } = useResourceGroup();
  const [open, setOpen] = useState(false);
  const [resourceGroupName, setresourceGroupName] = useState();
  const { createResourceG } = useCreateResourceGroup();
  return (
    <div className={styles.resourcesContainer}>
      <h1>Resources Hub</h1>
      <div className={styles.floderContainer}>
        {resourcesGroups?.data?.items?.map((el) => {
          return <ResourceGroup key={el._id} data={el}></ResourceGroup>;
        })}
      </div>
      {open && (
        <div className={styles.createForm}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createResourceG(resourceGroupName);
            }}
          >
            <input
              placeholder={"Enter Resource Group Name"}
              value={resourceGroupName}
              onChange={(e) => {
                setresourceGroupName(e.target.value);
              }}
            ></input>
            <ActionBtn txt={"Submit"} active={true}></ActionBtn>
            <span
              style={{
                marginLeft: "2rem",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            >
              &#128473;
            </span>
          </form>
        </div>
      )}
      {open && <Overlay></Overlay>}
      <div className={styles.btnContainer}>
        <ActionBtn
          txt={"+"}
          active={true}
          handleClick={() => {
            setOpen(true);
          }}
        ></ActionBtn>
      </div>
    </div>
  );
}
