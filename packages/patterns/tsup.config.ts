import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  clean: true,
  minify: false,
  sourcemap: true,
  tsconfig: "tsconfig.json",
});
