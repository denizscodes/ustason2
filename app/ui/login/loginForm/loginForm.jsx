"use client";

import { authenticate } from "../../../lib/actions";
import styles from "../../../ui/login/login.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <img src="/usta.webp" style={{
borderRadius:"5px",margin:"10px"

}}></img>
      <h1>Giriş</h1>
      <input type="text" placeholder="Kullanıcı" name="username" />
      <input type="password" placeholder="Şifre" name="password" />
      <button>Giriş</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
