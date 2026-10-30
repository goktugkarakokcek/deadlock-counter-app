---
name: Data Integrity and Accuracy
description: Ensures game data reliability, prevents AI hallucinations, and maintains currency of information.
---

# Skill: Data Integrity & Currency Management

## Context
This application provides tactical information for a competitive game (Deadlock). Because the game is in active development, data changes frequently. As an AI, you must prioritize accuracy, prevent data hallucination, and ensure easy maintainability for the user.

## Mandatory Rules

1. **Zero Hallucination:** Do not invent character stats, win rates, items, or map mechanics. If you do not have exact, verified data, use explicit placeholders (e.g., "TBD", "Needs Manual Entry") rather than guessing.
2. **Single Source of Truth:** All game-related data must be strictly isolated in `src/data.js` (or a JSON equivalent). Never hardcode game data directly inside React UI components (`.jsx`).
3. **Currency Tracking:** The application must support a "Patch Version" or "Last Updated" indicator in the UI to inform the end-user how current the information is.
4. **Disclaimer:** The UI must include a visible disclaimer stating that the game is in active development and data may shift between patches.

## Verification
Before proposing any code or data changes, confirm that you have not fabricated values and that the data is structured centrally for the user to update easily.