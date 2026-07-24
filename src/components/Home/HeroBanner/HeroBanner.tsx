import React from 'react'
import { useHistory } from '@docusaurus/router';

import styles from './HeroBanner.module.css'
//@ts-ignore
import HeroBannerImage from '@site/static/img/hero-banner-image.png';

const INFO_TEXT = 'A virtual workspace to contribute and collaborate on social good projects'
const CTA_TEXT = 'Get Started'
const PROJECTS_PATH = '/docs/projects/'
const HeroBanner = () => {
  const history = useHistory()

  const handleCtaClick = () => {
    history.push(PROJECTS_PATH)
  }

  return (
    <header className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.info__text}>{INFO_TEXT}</h2>
        <img className={styles.info__img} src={HeroBannerImage} />
      </div>
      <button className={styles.cta} onClick={handleCtaClick}>
        {CTA_TEXT}
      </button>
    </header >
  )
}

export default HeroBanner