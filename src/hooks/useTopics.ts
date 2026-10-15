import { usePluginData } from '@docusaurus/useGlobalData'

export type Topic = {
  /** File name under `docs/topics/`, without the extension. */
  id: string
  title: string
  description: string
  tags: string[]
  /** Route to the topic's page. */
  href: string
}

/** All topics, read from the front matter of `docs/topics/*.md`. */
export function useTopics(): Topic[] {
  return (usePluginData('topics-plugin') as { topics: Topic[] }).topics
}

/** Unique tags across every topic, sorted. */
export const tagsOf = (topics: Topic[]): string[] =>
  Array.from(new Set(topics.flatMap((t) => t.tags))).sort()
