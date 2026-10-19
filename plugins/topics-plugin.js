/**
 * Publishes every topic's front matter as global data so the marketing pages
 * (/topics, /about, /seedscore) can list and link topics without a separate
 * config file. A topic is any doc under `docs/topics/`; the Markdown file is
 * the single source of truth. Read it with `useTopics()`.
 */
module.exports = function topicsPlugin() {
  return {
    name: 'topics-plugin',
    async allContentLoaded({ allContent, actions }) {
      const docs =
        allContent['docusaurus-plugin-content-docs'].default.loadedVersions[0]
          .docs
      const topics = docs
        .filter((doc) => doc.id.startsWith('topics/'))
        .map((doc) => ({
          id: doc.id.replace(/^topics\//, ''),
          title: doc.title,
          description: doc.description,
          tags: doc.tags.map((t) => t.label),
          href: doc.permalink,
        }))
        .sort((a, b) => a.title.localeCompare(b.title))
      actions.setGlobalData({ topics })
    },
  }
}
