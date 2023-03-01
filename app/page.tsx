import Image from 'next/image'
import { Lato } from '@next/font/google'
import styles from './page.module.css'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>test</h1>
    </main>
  )
}
