import styles from "./page.module.css"
import HomeMain from "@/components/HomeMain/HomeMain";

export default function Home() {
  return (
    <section className={styles.page}>
      <HomeMain/>
    </section>
  )
}
