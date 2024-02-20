import Link from "next/link"
import styles from "./Button.module.css"

const Button = (
  {
    text,
    urlPath
  }: {
    text: string,
    urlPath: string
  }) => {
  return (
    <Link href={urlPath}>
      <button className={styles.loginbutton}>{text}</button>
    </Link>
  );
};
export default Button;