"use client";

import styles from "../components/video/register.module.css"
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import Link from "next/link";

export default function Page() {
  const { push } = useRouter();

  const checkPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ((document.getElementById("password") as HTMLInputElement).value !== event.currentTarget.value) {
      (document.getElementById("errorname") as HTMLInputElement).innerHTML = "Password mismatch";
      (document.getElementById("errorname") as HTMLInputElement).style.color = "red";
      (document.getElementById("errorname") as HTMLInputElement).style.display = "block";
      console.log(event.target.value)
    }
    else {
      (document.getElementById("errorname") as HTMLInputElement).style.display = "none";
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    if ((document.getElementById("password") as HTMLInputElement).value !== event.currentTarget.value) {
      return;
    }

    const payload = {
      username: event.currentTarget.username.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    try {
      const user = await axios.post("/api/auth/register", payload);
      if (user.status === 200) {
        push("/dashboard");
      }
      else {
        alert("Something went wrong.");
      }

    } catch (e) {
      const error = e as AxiosError;

      alert(error.message);
    }
  };

  return (
    <>
      <div className={styles.videoContainer}>
        <video playsInline autoPlay loop muted>
          <source src="/images/typing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoForm}>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.registerHeader}>
              SIGN UP
            </div>
            <div className={styles.formInputMain}>
              <div className={styles.formInput}>
                <label className={styles.formInputLabel} htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className={styles.formInputText}
                />
              </div>
              <div className={styles.formInput}>
                <label className={styles.formInputLabel} htmlFor="email">Email ID</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  title="Please enter correct email id"
                  required
                  className={styles.formInputText}
                />
              </div>
              <div className={styles.formInput}>
                <label className={styles.formInputLabel} htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className={styles.formInputText}
                />
              </div>
              <div className={styles.formInput}>
                <label className={styles.formInputLabel} htmlFor="confirmpassword">Confirm password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  required
                  onChangeCapture={checkPassword}
                  className={styles.formInputText}
                />
              </div>
              <p className={styles.inputErrorMessage} id="errorname"></p>
            </div>
            <div className={styles.submitDiv}>
              <button
                type="submit"
                className={styles.formSubmitButton}
              >
                Create account
              </button>
            </div>
            <hr className={styles.dividerLine} />
            <label className={styles.formAlreadyExists} htmlFor="confirmpassword">Already have an account?
              <Link href="/login">
                <p className={styles.navLink}>SIGN IN</p>
              </Link>
            </label>
          </form>
        </div>
      </div>
    </>
  )
}