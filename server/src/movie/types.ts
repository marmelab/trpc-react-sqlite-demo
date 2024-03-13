import { z } from "zod";

export const Movie = z.object({
  id: z.string(),
  title: z.string(),
  synopsis: z.string(),
  imageLink: z.string(),
  year: z.number(),
  directorId: z.string().nullable(),
  link: z.string(),
  alreadyWatched: z.boolean(),
});

export type Movie = z.infer<typeof Movie>;
