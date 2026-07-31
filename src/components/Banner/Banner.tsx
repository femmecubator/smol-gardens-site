import React from 'react'
import styles from './Banner.module.css'

/**
 * Green header block at the top of a topic page.
 *
 * Implements Figma node 2213:1617 from the "PAGE - Project Page template"
 * section: a centred Work Sans title over an Inter subtitle. Both values come
 * from `docs/topics/_configs.ts` via the page shell, so the banner and the
 * topic card can never disagree.
 */
const Banner = ({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) => (
  <div className={styles.container}>
    <div className={styles.textFrame}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  </div>
)

export default Banner
