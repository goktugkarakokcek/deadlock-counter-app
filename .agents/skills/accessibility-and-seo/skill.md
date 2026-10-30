---
name: Accessibility and SEO Standards
description: Enforces semantic HTML, accessibility, and SEO best practices for all UI changes.
---

# Skill: Frontend Quality, Accessibility & SEO

## Context
As an AI coding assistant, you must ensure that all generated code adheres strictly to modern web accessibility and SEO standards. Never generate lazy or non-semantic markup.

## Mandatory Rules

1. **Semantic HTML:** Always use correct semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) instead of generic `<div>` tags whenever possible.
2. **Heading Hierarchy:** Maintain a logical heading structure (H1 -> H2 -> H3). Never skip heading levels.
3. **Image Alt Texts:** Every `<img>` tag must have a descriptive and meaningful `alt` attribute. If an image is purely decorative, use `alt=""`.
4. **Tailwind Contrast:** Ensure color combinations used in Tailwind classes provide sufficient contrast for readability (e.g., avoid light gray text on white backgrounds).
5. **Interactive Elements:** All buttons and links must have clear, descriptive text or `aria-label` attributes.

## Verification
Before outputting code, verify that it passes these 5 constraints.