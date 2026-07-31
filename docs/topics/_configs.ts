/**
 * Single source of truth for Smol Gardens topics.
 *
 * Mirrors the open-sprints `docs/projects/_configs.ts` pattern: this typed map
 * drives BOTH the listing UI (`src/components/TopicsPageContent`) and each
 * topic's detail page (`docs/topics/<id>/<id>.mdx`). Adding a topic means
 * adding an entry here plus a folder built from `docs/templates/topic-page.mdx`
 * — no router edit,
 * no new component.
 */

export type Topic = {
  /** URL slug; must match the folder name under `docs/topics/`. */
  id: string
  title: string
  description: string
  /** Filterable. Drives the tag chips and sidebar filters on /topics. */
  tags: string[]
}

export type TopicsConfigProps = {
  [key: string]: Topic
}

/** Attributes the listing page is allowed to build filters from. */
export const FILTERABLE_ATTRIBUTES = new Set(['tags'])

const topicsConfigValue = {
  AlgorithmicBias: {
    id: 'algorithmic-bias',
    title: 'Algorithmic Bias',
    description:
      'Algorithms and datasets are not objective. They encode historical dynamics, cultural norms, institutional practices, and human biases—the values and assumptions of the people who created them.',
    tags: ['human-impact', 'labor-market'],
  },
  EnvironmentalCostOfAI: {
    id: 'environmental-cost-of-ai',
    title: 'Environmental Cost of AI',
    description:
      'Training and inference consume real energy and water. Measure the footprint of every model call before you decide to scale it up.',
    tags: ['environment', 'sustainability'],
  },
  DataProvenance: {
    id: 'data-provenance',
    title: 'Data Provenance',
    description:
      'Where did the training data come from, and who consented to it? Traceable datasets are the foundation of accountable systems.',
    tags: ['transparency', 'datasets'],
  },
  ModelRightSizing: {
    id: 'model-right-sizing',
    title: 'Model Right-Sizing',
    description:
      'Large models are often overkill. Small language models can deliver the same civic-tech outcome at a fraction of the cost.',
    tags: ['efficiency', 'slm'],
  },
  CommunityGovernance: {
    id: 'community-governance',
    title: 'Community Governance',
    description:
      'Affected communities need continuous mechanisms to shape and critique the AI systems being built for them.',
    tags: ['accountability', 'community'],
  },
  TransparencyReporting: {
    id: 'transparency-reporting',
    title: 'Transparency Reporting',
    description:
      'Document tradeoffs openly so that non-experts can understand how a system will impact them and offer meaningful feedback.',
    tags: ['transparency', 'reporting'],
  },
  LaborMarketImpact: {
    id: 'labor-market-impact',
    title: 'Labor Market Impact',
    description:
      'Automation reshapes who does what work. Map the downstream effects on the people whose jobs your tool touches.',
    tags: ['labor-market', 'human-impact'],
  },
  AccessibilityByDefault: {
    id: 'accessibility-by-default',
    title: 'Accessibility by Default',
    description:
      'Accountable tech is usable tech. Bake in keyboard navigation, contrast, and assistive-tech support from the first commit.',
    tags: ['accessibility', 'human-impact'],
  },
  SecurityAndMaintenance: {
    id: 'security-and-maintenance',
    title: 'Security & Maintenance',
    description:
      'Shipping fast with AI is easy; maintaining it is not. Plan for updates, dependencies, and failure modes up front.',
    tags: ['security', 'maintenance'],
  },
  PromptEfficiency: {
    id: 'prompt-efficiency',
    title: 'Prompt Efficiency',
    description:
      'Reduce redundant prompting. Every unnecessary call adds latency, cost, and environmental load to your workflow.',
    tags: ['efficiency', 'cost'],
  },
  OpenSourceTooling: {
    id: 'open-source-tooling',
    title: 'Open-Source Tooling',
    description:
      'A curated repository of civic-tech tools, hosted by the working group and made available open source for future builders.',
    tags: ['open-source', 'community'],
  },
  ImpactAssessment: {
    id: 'impact-assessment',
    title: 'Impact Assessment',
    description:
      'Use the Seedscore framework to measure human, systems, and environmental impact across your AI-enabled build.',
    tags: ['accountability', 'framework'],
  },
} satisfies TopicsConfigProps

const topicsConfig: TopicsConfigProps = topicsConfigValue

export const ALL_TOPICS: Topic[] = Object.values(topicsConfigValue)

export const ALL_TAGS: string[] = Array.from(
  new Set(ALL_TOPICS.flatMap((t) => t.tags)),
).sort()

/** Route to a topic's detail page. */
export const topicHref = (topic: Topic) => `/docs/topics/${topic.id}`

export default topicsConfig
