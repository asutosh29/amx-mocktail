import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import reactCompiler from "eslint-plugin-react-compiler"
import tailwind from "eslint-plugin-tailwindcss"
import { defineConfig, globalIgnores } from "eslint/config"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "react-compiler": reactCompiler,
      tailwindcss: tailwind,
    },
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/app/globals.css",
      },
    },
    rules: {
      // 1. React Compiler & Hooks
      "react-compiler/react-compiler": "error",
      "react-hooks/exhaustive-deps": "error", // Upgraded from warning to error
      "react-hooks/set-state-in-effect": "off",

      // 2. Tailwind Design System Guardrails
      "tailwindcss/no-custom-classname": "off", // Prevents custom classnames, forces tokens, cn() caused issues so off
      "tailwindcss/no-arbitrary-value": "error", // Prevents w-[17px], forces tokens
      "tailwindcss/no-contradicting-classname": "error", // Prevents flex grid collisions

      // 3. Prettier Handoff
      "tailwindcss/classnames-order": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    ".agents/**",
    ".codex/**",
    ".commandcode/**",
    ".design/**",
    ".impeccable/**",
    ".vscode/**",
    "next-env.d.ts",
    "src/components/ui/**",
  ]),
])

export default eslintConfig
