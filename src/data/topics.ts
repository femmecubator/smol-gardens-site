export type Topic = {
  title: string;
  description: string;
  tags: string[];
};

export const topics: Topic[] = [
  {
    title: "Algorithmic Bias",
    description:
      "Algorithms and datasets are not objective. They encode historical dynamics, cultural norms, institutional practices, and human biases—the values and assumptions of the people who created them.",
    tags: ["human-impact", "labor-market"],
  },
  {
    title: "Environmental Cost of AI",
    description:
      "Training and inference consume real energy and water. Measure the footprint of every model call before you decide to scale it up.",
    tags: ["environment", "sustainability"],
  },
  {
    title: "Data Provenance",
    description:
      "Where did the training data come from, and who consented to it? Traceable datasets are the foundation of accountable systems.",
    tags: ["transparency", "datasets"],
  },
  {
    title: "Model Right-Sizing",
    description:
      "Large models are often overkill. Small language models can deliver the same civic-tech outcome at a fraction of the cost.",
    tags: ["efficiency", "slm"],
  },
  {
    title: "Community Governance",
    description:
      "Affected communities need continuous mechanisms to shape and critique the AI systems being built for them.",
    tags: ["accountability", "community"],
  },
  {
    title: "Transparency Reporting",
    description:
      "Document tradeoffs openly so that non-experts can understand how a system will impact them and offer meaningful feedback.",
    tags: ["transparency", "reporting"],
  },
  {
    title: "Labor Market Impact",
    description:
      "Automation reshapes who does what work. Map the downstream effects on the people whose jobs your tool touches.",
    tags: ["labor-market", "human-impact"],
  },
  {
    title: "Accessibility by Default",
    description:
      "Accountable tech is usable tech. Bake in keyboard navigation, contrast, and assistive-tech support from the first commit.",
    tags: ["accessibility", "human-impact"],
  },
  {
    title: "Security & Maintenance",
    description:
      "Shipping fast with AI is easy; maintaining it is not. Plan for updates, dependencies, and failure modes up front.",
    tags: ["security", "maintenance"],
  },
  {
    title: "Prompt Efficiency",
    description:
      "Reduce redundant prompting. Every unnecessary call adds latency, cost, and environmental load to your workflow.",
    tags: ["efficiency", "cost"],
  },
  {
    title: "Open-Source Tooling",
    description:
      "A curated repository of civic-tech tools, hosted by the working group and made available open source for future builders.",
    tags: ["open-source", "community"],
  },
  {
    title: "Impact Assessment",
    description:
      "Use the Seedscore framework to measure human, systems, and environmental impact across your AI-enabled build.",
    tags: ["accountability", "framework"],
  },
];

export const ALL_TAGS = Array.from(
  new Set(topics.flatMap((t) => t.tags)),
).sort();
