import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.description__p}>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
   
    </main>
  )
}
