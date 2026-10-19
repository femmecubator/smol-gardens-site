---
title: 'Topic page'
hide_table_of_contents: true
---

# Topic page

A topic is **one Markdown file** in `docs/topics/`. Add the file and the topic
appears on `/topics` — card, tag filters, sidebar entry and its own page. No
code to edit.

## Add a topic

1. Copy `docs/topics/community-governance.md` and rename it, e.g.
   `my-new-topic.md`. The file name becomes the page address:
   `/docs/topics/my-new-topic`. Use lowercase words joined by hyphens.
2. Put the topic's picture in `static/img/topics/`, e.g.
   `static/img/topics/my-new-topic.jpg`.
3. Fill in the block between the `---` lines at the top, then write the page
   below it.

## The top block

```yaml
---
title: My New Topic
description: One or two sentences. Shown under the heading and on the /topics card.
tags: [accountability, community]
image: /img/topics/my-new-topic.jpg
image_alt: Describe the picture for people using screen readers
---
```

| Field         | What it does                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------- |
| `title`       | Page heading, card heading and sidebar label.                                                  |
| `description` | Text under the heading and on the card.                                                        |
| `tags`        | Filters on `/topics`. Reuse existing tags; a new one adds a new filter.                        |
| `image`       | Path to the picture, starting at `/img`. Cropped to a circle — keep the subject in the centre. |
| `image_alt`   | Short description of the picture. Required when `image` is set.                                |

Leave out `image` and the page shows a placeholder circle until the artwork
is ready.

## Tabs and their content

Below the top block, every line starting with a single `#` starts a new tab.
The heading text is the tab's label; everything under it, up to the next `#`
heading, is that tab's content. Write it in plain Markdown:

````md
# Summary

A paragraph with a [link](https://example.org) and **bold** text.

## A section inside the tab

- A list item
- Another one

:::tip

A highlighted callout. Also `:::note`, `:::info`, `:::warning`, `:::danger`.

:::

# Related Resources

- [A useful article](https://example.org/article)

# Projects

- [A project that uses this topic](https://example.org/project)
````

- **Add a tab:** add a new `# Heading` and write under it.
- **Rename a tab:** change the heading text.
- **Reorder tabs:** move the heading and its content up or down.
- **Remove a tab:** delete the heading and its content.

The first tab opens by default and starts with the title, description and
picture. Inside a tab, use `##` and smaller for sections — a single `#` always
starts a new tab. The banner and tab bar are added automatically.

## Checklist

- [ ] File name is lowercase-with-hyphens and ends in `.md`
- [ ] `title`, `description` and `tags` filled in
- [ ] Each tab starts with a single `#` heading
- [ ] Picture in `static/img/topics/` and `image_alt` written
- [ ] `npm run build` passes
