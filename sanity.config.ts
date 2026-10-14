import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { table } from "@sanity/table";
import { projectId, dataset } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "2vg0xai3",
  dataset: dataset || "production",
  title: "Takasla Blog Studio",
  plugins: [structureTool(), table()],
  schema: {
    types: schemaTypes,
  },
});
