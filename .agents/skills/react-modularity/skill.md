---
name: React Component Modularity
description: Enforces clean code architecture by strictly separating React components.
---

# Skill: React Component Modularity & Clean Code

## Context
AI agents tend to write monolithic code. To prevent `App.jsx` from becoming bloated, you must strictly follow React component modularity principles in this project.

## Mandatory Rules

1. **No Monolithic Files:** Do not write all UI elements into `App.jsx`. `App.jsx` should only act as a layout wrapper and state provider.
2. **Component Folder:** Create a `src/components/` directory if it doesn't exist.
3. **Single Responsibility:** Every distinct UI section (e.g., MatchupCard, MapRoutes, Timeline) MUST be a separate `.jsx` file inside the `components` folder.
4. **Export/Import:** Use default or named exports for components and import them cleanly into the main layout.
5. **Data Separation:** Never hardcode large arrays or objects inside components. Always fetch them from a centralized `data.js` or `constants.js` file.

## Verification
Before executing code changes, confirm that you are not bloating `App.jsx` and are actively modularizing the UI.