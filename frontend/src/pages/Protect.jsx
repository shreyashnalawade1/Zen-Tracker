import { useNavigate } from "react-router";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
// import styles from "./protect.module.css";
export default function Protect({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();
  const userId = user?.data?.user?._id;
  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  return <>{children}</>;
}
