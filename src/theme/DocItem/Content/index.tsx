import React from 'react'
import Content from '@theme-original/DocItem/Content'
import type ContentType from '@theme/DocItem/Content'
import type { WrapperProps } from '@docusaurus/types'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import Banner from '@site/src/components/Banner'

type Props = WrapperProps<typeof ContentType>

/**
 * Topic page layout (Figma "PAGE - Project Page template", node 2213:2590).
 *
 * Adds the green banner above topic pages. The tabs and intro block come from
 * plugins/remark-topic-tabs.js, so topic files stay plain Markdown. Other docs
 * render as usual.
 */
export default function ContentWrapper(props: Props) {
  const { metadata } = useDoc()

  if (!metadata.id.startsWith('topics/')) return <Content {...props} />

  return (
    <>
      <Banner title={metadata.title} subtitle={metadata.description} />
      <Content {...props} />
    </>
  )
}
