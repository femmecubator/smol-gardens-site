/**
 * Turns the `# Heading` sections of a topic file into tabs, so editors manage
 * tabs with plain Markdown: every top-level heading starts a tab labelled with
 * its text, and everything up to the next one is that tab's content.
 *
 * Runs before Docusaurus's own remark plugins, so the headings never become
 * the page title or table-of-contents entries. The intro block (title,
 * description, image) is inserted at the top of the first tab.
 * `Tabs`, `TabItem` and `TopicIntro` come from src/theme/MDXComponents.
 */
const jsx = (name, attributes, children = []) => ({
  type: 'mdxJsxFlowElement',
  name,
  attributes: Object.entries(attributes).map(([attr, value]) => ({
    type: 'mdxJsxAttribute',
    name: attr,
    value,
  })),
  children,
})

const textOf = (node) =>
  node.value ?? (node.children ?? []).map(textOf).join('')

const slug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

module.exports = function remarkTopicTabs() {
  return (tree, file) => {
    if (!file.path?.includes('/docs/topics/')) return

    // Front matter and imports/exports stay at the root; the rest is tab content.
    const isMeta = (n) => ['yaml', 'toml', 'mdxjsEsm'].includes(n.type)
    const keep = tree.children.filter(isMeta)
    const body = tree.children.filter((n) => !isMeta(n))

    const tabs = []
    for (const node of body) {
      if (node.type === 'heading' && node.depth === 1) {
        tabs.push({ label: textOf(node).trim(), children: [] })
      } else if (tabs.length) {
        tabs[tabs.length - 1].children.push(node)
      } else {
        // Content before the first heading opens an implicit Summary tab.
        tabs.push({ label: 'Summary', children: [node] })
      }
    }
    if (!tabs.length) tabs.push({ label: 'Summary', children: [] })

    tabs[0].children.unshift(jsx('TopicIntro', {}))

    // <Tabs> throws on duplicate values, so two tabs with the same heading
    // get numbered values instead of breaking the build.
    const seen = new Map()
    const valueOf = (label, i) => {
      const base = slug(label) || `tab-${i + 1}`
      const n = (seen.get(base) ?? 0) + 1
      seen.set(base, n)
      return n === 1 ? base : `${base}-${n}`
    }

    tree.children = [
      ...keep,
      jsx(
        'Tabs',
        {},
        tabs.map((tab, i) =>
          jsx(
            'TabItem',
            {
              value: valueOf(tab.label, i),
              label: tab.label,
              ...(i === 0 && { default: null }),
            },
            tab.children,
          ),
        ),
      ),
    ]
  }
}
