import { useState } from "react";
import ResourceLink from "../features/resources/ResourceLink";
import useResource from "../hooks/useResource";
import ActionBtn from "../ui/ActionBtn";
import Overlay from "../ui/Overlay";
import styles from "./resourceGroup.module.css";
import useCreateResource from "../hooks/useCreateResource";

export default function ResourceGroup() {
  const { resources } = useResource();
  const [open, setOpen] = useState(false);
  const [resourceName, setResourceName] = useState();
  const [link, setLink] = useState();
  const { createResourceFn } = useCreateResource();
  console.log(resources?.data?.items);
  return (
    <div className={styles.resourceContainer}>
      <h1>Resources</h1>
      <div className={styles.resourceGroupContainer}>
        {resources?.data?.items?.map((el, i) => (
          <ResourceLink data={el} key={el._id} no={i + 1}></ResourceLink>
        ))}
      </div>

      {open && (
        <div className={styles.createForm}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createResourceFn({
                resourceName: resourceName,
                link: link,
              });
            }}
          >
            <input
              placeholder={"Resource Name"}
              value={resourceName}
              onChange={(e) => {
                setResourceName(e.target.value);
              }}
            ></input>
            <input
              placeholder={"Link"}
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
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
      <div className={styles.btnContainer}></div>
      <div className={styles.btnContainer}>
        <ActionBtn
          active={true}
          txt={"+"}
          handleClick={() => {
            setOpen(true);
          }}
        ></ActionBtn>
      </div>
    </div>
  );
}
