import { createClient } from "next-sanity";

const projectId = "t8s9q4ho";
const dataset = "production";
const apiVersion = "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
