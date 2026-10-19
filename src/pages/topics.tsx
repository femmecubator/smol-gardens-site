import React from 'react'
import Layout from '@theme/Layout'
import TopicsPageContent from '@site/src/components/TopicsPageContent'

/**
 * Marketing route for the topic listing. All content and filters come from
 * `docs/topics/*.md` via <TopicsPageContent />; this file only supplies
 * the page shell.
 */
export default function Topics() {
  return (
    <Layout title="Topics" description="Accountable AI topics and filters">
      <TopicsPageContent />
    </Layout>
  )
}
