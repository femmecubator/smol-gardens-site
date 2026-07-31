import React from 'react'
import Link from '@docusaurus/Link'
import { Lightbulb } from 'lucide-react'
import { topicHref, type Topic } from '../../../../docs/topics/_configs'

export default function TopicCard({ topic }: { topic: Topic }) {
  return (
    <article className="flex flex-col gap-3 rounded-[16px] border border-[var(--color-border-subtle)] bg-white p-8">
      <span className="grid size-12 place-items-center rounded-[10px] bg-[var(--color-icon-accent-bg)]">
        <Lightbulb size={24} className="text-[var(--color-icon-accent)]" strokeWidth={2} />
      </span>
      <h3 className="font-['Inter'] text-[16px] text-[var(--color-text-strong)]">{topic.title}</h3>
      <p className="font-['Inter'] text-[12px] leading-normal text-[var(--color-text-muted)]">
        {topic.description}
      </p>
      <p className="font-['Inter'] text-[12px] text-[var(--color-accent)]">
        {topic.tags.map((t) => `#${t}`).join(', ')}
      </p>
      <Link
        to={topicHref(topic)}
        className="font-['Nunito_Sans'] text-[14px] font-bold text-[var(--color-content-default)] underline"
      >
        Read the topic &gt;
      </Link>
    </article>
  )
}
