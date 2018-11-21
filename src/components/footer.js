import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.scss"

const Footer = ({ title='No Title', description, plugins=[] }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p>
      {plugins.length ? (
        `Plugins used: [${plugins.join(', ')}]`
      ) : (
        'No plugin used'
      )}
      </p>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Footer;