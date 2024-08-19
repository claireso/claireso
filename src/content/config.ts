import { z, defineCollection } from "astro:content";
import { CategoryEnum, RoleEnum } from "@types";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    createdAt: z.date(),
    name: z.string(),
    company: z.string(),
    category: z.nativeEnum(CategoryEnum),
    website: z.string().url().optional(),
    roles: z.array(z.nativeEnum(RoleEnum)),
    stack: z.array(z.string()),
    images: z.array(
      z.object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    ),
  }),
});

export const collections = {
  project: projectCollection,
};
