import React, { useMemo, useState } from 'react'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { ALL_TOPICS, ALL_TAGS } from '../../../docs/topics/_configs'
import TopicCard from './TopicCard'
import type { SelectedTag } from './types'

/**
 * Listing UI for Smol Gardens topics.
 *
 * Mirrors open-sprints' `ProjectsPageContent`: the cards and every filter are
 * derived from `docs/topics/_configs.ts`, so adding a topic there makes it
 * appear here — and links to its `docs/topics/<id>/` page — with no edit to
 * this file.
 */
export default function TopicsPageContent() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<SelectedTag>(null)
  const [toolsOpen, setToolsOpen] = useState(true)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL_TOPICS.filter((t) => {
      const matchesTag = !activeTag || t.tags.includes(activeTag)
      const matchesQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.includes(q))
      return matchesTag && matchesQuery
    })
  }, [query, activeTag])

  return (
    <div className="mx-auto flex max-w-[1440px] gap-8 px-6 py-10 md:px-10">
      {/* Sidebar */}
      <aside className="hidden w-[200px] shrink-0 lg:block">
        <div className="sticky top-[120px]">
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
                  activeTag === null ? 'text-[#761fb1]' : 'text-[#515151]'
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
                    activeTag === tag ? 'text-[#761fb1]' : 'text-[#515151]'
                  }`}
                >
                  {tag.replace('-', ' ')}
                </button>
              ))}
            </nav>
          )}
        </div>
      </aside>

      {/* Main */}
      <div className="min-w-0 flex-1">
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
                  ? 'border-[#761fb1] bg-[#761fb1] text-white'
                  : 'border-[#e5e7eb] text-[#4a5565] hover:border-[#761fb1]'
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
                    ? 'border-[#761fb1] bg-[#761fb1] text-white'
                    : 'border-[#e5e7eb] text-[#4a5565] hover:border-[#761fb1]'
                }`}
              >
                #{tag.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {results.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center font-['Inter'] text-[15px] text-[#4a5565]">
            No topics match your search. Try a different keyword or filter.
          </p>
        )}
      </div>
    </div>
  )
}
