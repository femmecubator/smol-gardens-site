import React from 'react'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import useBaseUrl from '@docusaurus/useBaseUrl'
import ContentWithMedia from '@site/src/components/ContentWithMedia'

/**
 * Title, description and circle-cropped image at the top of a topic's first
 * tab, read from the topic's front matter (`image`, `image_alt`).
 */
export default function TopicIntro() {
  const { metadata, frontMatter } = useDoc()
  const { image, image_alt } = frontMatter as { image?: string; image_alt?: string }
  const imageUrl = useBaseUrl(image ?? '')

  return (
    <ContentWithMedia src={image ? imageUrl : undefined} alt={image_alt} label="Topic image">
      <h2>{metadata.title}</h2>
      <p>{metadata.description}</p>
    </ContentWithMedia>
  )
}
