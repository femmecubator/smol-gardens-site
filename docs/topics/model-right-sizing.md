---
title: Model Right-Sizing
description: Large models are often heavy-handed overkill. Small language models can deliver the same civic-tech outcome at a fraction of the cost.
tags: [efficiency, slm]
---

# Summary

:::tip Challenge

What specific capability of a massive model are you actually utilizing, and
could a local, fine-tuned SLM achieve 90% of that result with zero cloud
dependency?

:::

## Overview

### How small is "small" for language models?

There's no strict cutoff, but in practice, SLMs usually fall in the sub-1B to
~10B parameter range. Models in this range can often run on a single GPU
without sharding or complex distributed inference setups.

### Are SLMs good enough for production?

Yes, for many use cases. Modern SLMs benefit from better training data,
distillation, and post-training techniques, making them far more capable than
earlier generations. In fact, you don't need GPT-5.2-level capability for most
real-world tasks.

One of their biggest advantages is fine-tuning. Small models are easier and
cheaper to fine-tune on proprietary data such as internal documents,
domain-specific workflows, or product knowledge. In narrow or specialized
tasks, a well fine-tuned small model can outperform much larger
general-purpose models, running faster and at a fraction of the cost.

As a result, SLMs are widely used in production for internal copilots, agent
workflows and automation.

## Deep Dive Questions

- What are your observations when using Small Language Models?
