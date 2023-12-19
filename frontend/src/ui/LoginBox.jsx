import styles from "./loginBox.module.css";
import loginImg from "../assets/illustrations/login.svg";

import ActionBtn from "./ActionBtn";
import Input from "./Input";
import Form from "./Form";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

export default function LoginBox() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const { login } = useLogin();
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!email || !pass) return;
    login({
      email,
      password: pass,
    });
  };

  return (
    <div className={styles.loginBox}>
      <div>
        <img
          src={loginImg}
          alt="login illustrations"
          className={styles.loginImg__illustrationLogin}
        />
      </div>
      <div className={styles.loginImg__formContainer}>
        <h2 className={styles.titleCenter}>Login</h2>
        <Form cta={"Signin"} handleSubmit={handleSubmit}>
          <Input name="Email" val={email} setVal={setEmail}></Input>
          <Input name="Password" val={pass} setVal={setPass}></Input>
          <ActionBtn txt={"signin"}></ActionBtn>
        </Form>
      </div>
    </div>
  );
}
