import Link from "next/link"
import styles from "./index.module.css"
export default function Footer() {
  return (
    <div className={styles.footerMainDiv}>
      <div className={styles.footerInnerDiv}>
        <div className="div">
          <Link href="/">
            <img
              src="/images/logo-white.png"
              alt="Logo"
              width="150"
              height={74}
              className="relative"
            />
          </Link>
        </div>
        <div className={styles.socialIconsMainDiv}>
          <a href="https://github.com/PranavJ96" target="_blank" rel="noopener noreferrer">
            <img className={styles.socialIcons} src="/images/icons/github.png" alt="Github" />
          </a>
          <a href="https://www.instagram.com/learntocodebetter101/" target="_blank" rel="noopener noreferrer">
            <img className={styles.socialIconsWithPadding} src="/images/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@learntocodebetter101" target="_blank" rel="noopener noreferrer">
            <img className={styles.socialIconsWithPadding} src="/images/icons/youtube.svg" alt="Youtube" />
          </a>
          <a href="https://www.threads.net/@learntocodebetter101" target="_blank" rel="noopener noreferrer">
            <img className={styles.socialIconsWithPadding} src="/images/icons/threads.png" alt="Threads" />
          </a>
          <a href="https://www.linkedin.com/in/pranav-nayak-b450951a0/" target="_blank" rel="noopener noreferrer">
            <img className={styles.socialIcons} src="/images/icons/linkedin.png" alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}