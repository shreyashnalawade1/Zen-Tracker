import { useState } from "react";
import ProjectBox from "../features/projects/projectBox";
import useProjects from "../hooks/useProjects";
import useUser from "../hooks/useUser";
import ActionBtn from "../ui/ActionBtn";
import styles from "./projects.module.css";
import greet from "greeting-time";
import Overlay from "../ui/Overlay";
import useCreate from "../hooks/useCreateProject";
export default function Projects() {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  // console.log(greet(new Date()));
  const { projects } = useProjects();
  const [project, setProject] = useState();
  const [discription, setDiscription] = useState();
  const [tags, setTags] = useState();
  const [emails, setEmails] = useState();
  const { createProject } = useCreate();

  const greeting = greet(new Date());

  return (
    <div className={styles.projectContainer}>
      <h1> {`${greeting}, ${user?.data?.user?.name}!`} </h1>
      <h2>Active Projects</h2>
      <div className={styles.projectsContainer}>
        {projects?.data?.items?.map((el, i) => {
          return <ProjectBox key={el._id} data={el} no={i + 1}></ProjectBox>;
        })}
      </div>

      {open && (
        <div className={styles.createForm}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();

              if (project && discription && tags && emails) {
                createProject({
                  projectName: project,
                  discription,
                  tags: tags.split(","),
                  //todo
                  team: emails.split(","),
                });
                setProject("");
                setDiscription("");
                setTags("");
                setEmails("");
                setOpen(false);
              }
            }}
          >
            <input
              placeholder={"Project Name"}
              value={project}
              onChange={(e) => setProject(e.target.value)}
            ></input>
            <input
              placeholder={"Discription"}
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            ></input>
            <input
              placeholder={"tags"}
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            ></input>
            <input
              placeholder={"Team Members Email"}
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            ></input>
            <div>
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
            </div>
          </form>
        </div>
      )}
      {open && <Overlay></Overlay>}

      <div className={styles.btnContainer}>
        <ActionBtn
          txt={"Create New"}
          active={true}
          handleClick={() => setOpen(true)}
        ></ActionBtn>
      </div>
    </div>
  );
}
