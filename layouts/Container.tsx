import { ReactNode } from "react"
import styles from "../styles/layouts/Container.module.scss"

interface ContainerInterface {
  children: ReactNode
}

export const Container = ({children}: ContainerInterface) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}