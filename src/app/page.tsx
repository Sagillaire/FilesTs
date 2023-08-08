import { Navbar } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.page__main}>
      <Navbar />

      <section className={styles.content}>

      </section>
    </main>
  )
}
