import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-03-20",
  useCdn: false,
  token: process.env.SANITY_SECRET_TOKEN,
});
