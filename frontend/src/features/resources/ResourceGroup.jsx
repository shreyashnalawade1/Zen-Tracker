import styles from "./resourceGroup.module.css";
import fileIcon from "../../assets/icons/folder.png";
import { useNavigate } from "react-router";
export default function ResourceGroup({ data }) {
  //   console.log(data);
  const date = new Date(data?.updatedAt);
  const navigate = useNavigate();
  return (
    <div
      className={styles.resourceGroupContainer}
      onClick={() => {
        // console.log(data?._id);
        navigate(`/resource/${data?._id}`);
      }}
    >
      <img src={fileIcon}></img>
      <h2>{data?.resourceGroupName} </h2>
      <h3 className={styles.numFile}>{data?.numResource} Files</h3>
      <h3 className={styles.upDate}>
        Last Updated: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
      </h3>
    </div>
  );
}
