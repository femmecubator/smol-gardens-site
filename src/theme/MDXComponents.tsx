import MDXComponents from '@theme-original/MDXComponents'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import TopicIntro from '@site/src/components/TopicIntro'

/**
 * Components available in every MDX file without an import. `Tabs`, `TabItem`
 * and `TopicIntro` are emitted by plugins/remark-topic-tabs.js for topic pages.
 */
export default {
  ...MDXComponents,
  Tabs,
  TabItem,
  TopicIntro,
}
