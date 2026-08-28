<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 1. Design & Styling (Tailwind v4 & shadcn)

- **Token Only:** You are strictly forbidden from using arbitrary values. Use the semantic tokens defined in `src/app/globals.css`.
- **Use Existing Tokens, Not Design-File Colors:** `design/` HTML files are layout/structure inspiration only. Always map to the semantic tokens in `src/app/globals.css`. Never copy hex values or arbitrary values from design files.
- **No Configuration Files:** We use Tailwind v4. All custom styling variables must go in the `@theme` block in `src/app/globals.css`.
- **Component Primitives:** All shadcn/ui components are located in `src/components/ui/`.
- **Package Manager:** Strictly use `bun`.
- **Prettier:** Run `bunx prettier --write .` on files you modify.
- **Linting (Batched):** Run `bun run lint` at logical checkpoints.
- **Circuit Breaker:** If you attempt to fix a linting error 3 times and fail, STOP. Ask the user for help.

## 2. The Definition of Done

1. No arbitrary Tailwind classes were introduced.
2. `bun run lint` was executed on the batch of files and returns 0 errors.
3. `bun run format` was executed succesfully
