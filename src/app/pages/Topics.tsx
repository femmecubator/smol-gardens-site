import { useMemo, useState } from "react";
import { Search, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";

type Topic = {
  title: string;
  description: string;
  tags: string[];
};

const TOPICS: Topic[] = [
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

const ALL_TAGS = Array.from(new Set(TOPICS.flatMap((t) => t.tags))).sort();

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <article className="flex flex-col gap-3 rounded-[16px] border border-[#e5e7eb] bg-white p-8">
      <span className="grid size-12 place-items-center rounded-[10px] bg-[#dcfce7]">
        <Lightbulb size={24} className="text-[#16a34a]" strokeWidth={2} />
      </span>
      <h3 className="font-['Inter'] text-[16px] text-[#0a0a0a]">{topic.title}</h3>
      <p className="font-['Inter'] text-[12px] leading-normal text-[#4a5565]">
        {topic.description}
      </p>
      <p className="font-['Inter'] text-[12px] text-[#0880ea]">
        {topic.tags.map((t) => `#${t}`).join(", ")}
      </p>
      <a
        href="#"
        className="font-['Nunito_Sans'] text-[14px] font-bold text-[#222] underline"
      >
        Link to Project &gt;
      </a>
    </article>
  );
}

export default function Topics() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [toolsOpen, setToolsOpen] = useState(true);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOPICS.filter((t) => {
      const matchesTag = !activeTag || t.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.includes(q));
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  return (
    <div className="mx-auto flex max-w-[1440px] gap-8 px-6 py-10 md:px-10">
      {/* Sidebar */}
      <aside className="hidden w-[200px] shrink-0 lg:block">
        <div className="sticky top-[120px]">
          <a
            href="#"
            className="flex h-12 items-center rounded-[16px] px-6 font-['Inter'] text-[16px] font-bold text-[#222] hover:bg-[#f5f6f7]"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setToolsOpen((v) => !v)}
            className="flex h-12 w-full items-center justify-between rounded-[16px] bg-[#e7e9ff] px-6 font-['Inter'] text-[16px] font-bold text-[#333]"
          >
            Topics
            {toolsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {toolsOpen && (
            <nav className="mt-1 flex flex-col" aria-label="Topic filters">
              <button
                type="button"
                onClick={() => setActiveTag(null)}
                className={`flex h-11 items-center px-6 text-left font-['Inter'] text-[16px] font-medium ${
                  activeTag === null ? "text-[#761fb1]" : "text-[#515151]"
                }`}
              >
                All Topics
              </button>
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`flex h-11 items-center px-6 text-left font-['Inter'] text-[16px] font-medium capitalize ${
                    activeTag === tag ? "text-[#761fb1]" : "text-[#515151]"
                  }`}
                >
                  {tag.replace("-", " ")}
                </button>
              ))}
            </nav>
          )}
        </div>
      </aside>

      {/* Main */}
      <div className="min-w-0 flex-1">
        {/* Search + filter (kept on top) */}
        <div className="flex flex-col gap-4 border-b border-[#e5e7eb] pb-6">
          <div className="relative max-w-[420px]">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, tags, or keywords…"
              className="h-12 w-full rounded-[12px] border border-[#e5e7eb] bg-white pl-11 pr-4 font-['Inter'] text-[15px] text-[#222] outline-none focus:border-[#761fb1]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`rounded-full border px-4 py-1.5 font-['Inter'] text-[13px] transition-colors ${
                activeTag === null
                  ? "border-[#761fb1] bg-[#761fb1] text-white"
                  : "border-[#e5e7eb] text-[#4a5565] hover:border-[#761fb1]"
              }`}
            >
              All
            </button>
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-1.5 font-['Inter'] text-[13px] capitalize transition-colors ${
                  activeTag === tag
                    ? "border-[#761fb1] bg-[#761fb1] text-white"
                    : "border-[#e5e7eb] text-[#4a5565] hover:border-[#761fb1]"
                }`}
              >
                #{tag.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        {results.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((topic) => (
              <TopicCard key={topic.title} topic={topic} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center font-['Inter'] text-[15px] text-[#4a5565]">
            No topics match your search. Try a different keyword or filter.
          </p>
        )}
      </div>
    </div>
  );
}
