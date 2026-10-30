---
name: Vercel Web Deployment Workflow
description: Mandatory update loop for Git and Vercel deployments.
---

# Skill: Vercel Web Deployment Workflow

## Context
This project requires a strict version control and cloud deployment workflow. You are acting as an AI coding assistant. Whenever you make code changes, you must guide the user through the following mandatory deployment cycle.

## Mandatory Update Loop (Zorunlu Güncelleme Döngüsü)

When a change is requested and implemented, enforce these steps sequentially:

1. **Local Review:** 
   - Ask the user to check the local development server (e.g., `npm run dev`) and verify the changes visually.
2. **Git Diff:** 
   - Instruct the user to run `git status` and `git diff` to review modified files.
3. **Production Build Check:** 
   - Instruct the user to run `npm run build` to ensure the project compiles without errors before committing.
4. **Commit & Push:** 
   - Provide the exact terminal commands for the user to execute:
     `git add .`
     `git commit -m "feat/fix: [Anlamlı ve açıklayıcı commit mesajı]"`
     `git push`
5. **Vercel Deployment Verification:** 
   - Remind the user that the push triggers a Vercel automatic deployment.
   - Instruct the user to open the Production URL, refresh the page, and verify the changes live.

## Constraints
- Never skip the `npm run build` step. Pushing broken builds to Vercel is strictly prohibited.
- Commit messages must clearly state what was changed and why.