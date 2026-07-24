import React from 'react'
import Layout from '@theme/Layout'
import styles from './JoinToday.module.css'

const FORM_EMBED_LINK = 'https://airtable.com/embed/appJBLJKp4uAkZ1cu/shrT0JCWjsFMPJiYy'

export default function JoinToday(): JSX.Element {
  return (
    <Layout>
      <div className={styles.loader}>Loading...</div>
      <main className={styles.iframe_container}>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe src={FORM_EMBED_LINK} width="100%" height="1963" ></iframe>
      </main>
    </Layout>
  )
}
