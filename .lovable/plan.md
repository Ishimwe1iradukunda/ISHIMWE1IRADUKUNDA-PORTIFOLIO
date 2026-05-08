## Goal

Bring back the data/functionality from the previous "GitHub" components without changing the look of the current portfolio. Existing section UI (Hero, About, Skills, Projects, Experience, Testimonials, Blog, Contact, Footer) stays exactly as-is — only the **data sources** and **internal logic** of each section change.

## Where each old feature goes

| Old component / data | New home in portfolio | What changes visually |
|---|---|---|
| `GitHubProjects` repo list (12 repos) | `ProjectsSection` ("My Work / Featured Projects") | None — repos rendered using the existing card style |
| `GitHubProjects` categories (production / business / tools / learning) | `ProjectsSection` filter tabs | Filter labels replaced with: All, Production, Business, Tools, Learning |
| `GitHubStats` numbers (30+ repos, primary tech, focus areas) | `AboutSection` stats block | Same stat cards, fed by the new data |
| `GitHubStats` tech stack list | `SkillsSection` | Merged into existing skills, no new UI block |
| Hero "GitHub Profile" link | Hero social icons (already present) | No change |

## Implementation

1. **Create `src/data/githubProjects.ts`** — single source of truth. Export the 12 repos with fields the current `ProjectsSection` card expects: `title, description, tags, category, stars, liveUrl, githubUrl, featured, gradient`. Map old categories → new filter labels (`production → Production`, etc.). Pick a tasteful gradient per category (using existing primary/cyan tokens, no new colors).

2. **Update `ProjectsSection.tsx`**
   - Replace the empty `allProjects = []` with an import from `@/data/githubProjects`.
   - Replace `categories = ["All", "Full Stack", "DevOps", "API"]` with `["All", "Production", "Business", "Tools", "Learning"]`.
   - Mark a couple of flagship repos (e.g. `asistanttech.com`, `rugwiro-trade-flow`) as `featured: true`.
   - No JSX/markup changes — the existing card layout, filter tab styles, glass effect, reveal animation all stay.

3. **Update `AboutSection.tsx`** — feed its stats block from the same data file (repo count = `projects.length`, primary tech, focus areas). Keep the existing card markup. (Will read the file first to confirm the exact shape before editing.)

4. **Update `SkillsSection.tsx`** — ensure the tech list from old `GitHubStats` (TypeScript, React, Tailwind, JS, Node, Vite, HTML/CSS, shadcn/ui) is represented. Add only what's missing; do not restructure the section.

5. **Delete the now-unused files** `src/components/GitHubProjects.tsx` and `src/components/GitHubStats.tsx` (their data has moved to `src/data/githubProjects.ts`, their UI is replaced by the portfolio sections).

## Out of scope

- No changes to Hero (floating icons, profile picture, typing animation stay).
- No changes to Navbar, Footer, Contact, Testimonials, Blog, Experience layouts.
- No new colors — reuse existing `--primary`, `--secondary`, gradient tokens.
- No backend / edge functions — repo list is static (matches previous behavior).

## Files touched

- add: `src/data/githubProjects.ts`
- edit: `src/components/portfolio/ProjectsSection.tsx`, `AboutSection.tsx`, `SkillsSection.tsx`
- delete: `src/components/GitHubProjects.tsx`, `src/components/GitHubStats.tsx`
