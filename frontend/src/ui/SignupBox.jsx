import { useState } from "react";

import styles from "./signupBox.module.css";
import loginImg from "../assets/illustrations/login.svg";
import ActionBtn from "./ActionBtn";
import Input from "./Input";
import Form from "./Form";
import useSignup from "../hooks/useSignup";

export default function SignupBox() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [conPass, setConPass] = useState();
  const [name, setName] = useState();
  const { signup } = useSignup();
  const handleSubmit = function (e) {
    e.preventDefault();
    if (email.length && pass.length && conPass.length && name.length) {
      signup({ name, email, password: pass, passwordConfirm: conPass });
    }
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
        <h2 className={styles.titleCenter}>Signup</h2>
        <Form cta={"Signin"} handleSubmit={handleSubmit}>
          <Input name="Name" val={name} setVal={setName}></Input>
          <Input name="Email" val={email} setVal={setEmail}></Input>
          <Input name="Password" val={pass} setVal={setPass}></Input>
          <Input
            name="Confirm Password"
            val={conPass}
            setVal={setConPass}
          ></Input>

          <ActionBtn txt={"singup"}></ActionBtn>
        </Form>
      </div>
    </div>
  );
}
