import React from 'react'
import Layout from '@theme/Layout'
import styles from './Contributors.module.css'

const CONTRIBUTORS_EMBED_LINK = `https://airtable.com/embed/appJBLJKp4uAkZ1cu/shrX7cD7u4MdwBOVM?backgroundColor=red&viewControls=on`
export default function Contributors(): JSX.Element {
  return (
    <Layout>
      <div className={styles.loader}>Loading...</div>
      <main className={styles.iframe_container}>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe src={CONTRIBUTORS_EMBED_LINK} width="100%" height="888"></iframe>
      </main>
    </Layout>
  )
}