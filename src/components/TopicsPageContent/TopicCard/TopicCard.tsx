import React from 'react'
import Link from '@docusaurus/Link'
import { Lightbulb } from 'lucide-react'
import { topicHref, type Topic } from '../../../../docs/topics/_configs'

export default function TopicCard({ topic }: { topic: Topic }) {
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
        {topic.tags.map((t) => `#${t}`).join(', ')}
      </p>
      <Link
        to={topicHref(topic)}
        className="font-['Nunito_Sans'] text-[14px] font-bold text-[#222] underline"
      >
        Read the topic &gt;
      </Link>
    </article>
  )
}
