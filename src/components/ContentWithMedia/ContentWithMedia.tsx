import React from 'react'
import { ImageIcon } from 'lucide-react'
import styles from './ContentWithMedia.module.css'

type Props = {
  /** Copy column. Whatever the MDX partial wraps in this component. */
  children: React.ReactNode
  /** Absolute path under `static/`, e.g. `/img/foo.jpg`. Omit for the placeholder. */
  src?: string
  /** Required whenever `src` is set — this is what a screen reader announces. */
  alt?: string
  /** Placeholder caption. Only shown when `src` is omitted. */
  label?: string
}

/**
 * Two-column content row: copy on the left, media on the right.
 *
 * Implements the "project-desc" block of the Figma project-page template
 * (node 2241:1779), which pairs the tab's body copy with a circle-cropped
 * image on the right. Without `src` it renders a placeholder frame of the same
 * shape, so the layout is correct before the artwork exists and pages do not
 * silently lose the column.
 *
 * The image is cropped to a circle, so supply artwork whose subject sits near
 * the centre — the corners are always clipped.
 */
const ContentWithMedia = ({ children, src, alt, label }: Props) => (
  <div className={styles.row}>
    <div className={styles.copy}>{children}</div>
    <div className={styles.media}>
      {src ? (
        <img className={styles.image} src={src} alt={alt ?? ''} />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={label ?? 'Image placeholder'}>
          <ImageIcon aria-hidden className={styles.placeholderIcon} size={28} />
          <span>{label ?? 'Image placeholder'}</span>
        </div>
      )}
    </div>
  </div>
)

export default ContentWithMedia
