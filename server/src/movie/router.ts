import { z } from "zod";

import { procedure, router } from "../trpc";

import { prisma } from "../router";
import { Movie } from "./types";

export const movieRouter = router({
  getMovies: procedure.query(() => {
    return prisma.movie.findMany();
  }),
  getMovieById: procedure
    .input(z.string())
    .query(({ input }) => prisma.movie.findUnique({ where: { id: input } })),
  createMovie: procedure
    .input(Movie.omit({ id: true }))
    .mutation(({ input }) => {
      return prisma.movie.create({ data: input });
    }),
  deleteMovie: procedure.input(z.string()).mutation(({ input }) => {
    return prisma.movie.delete({ where: { id: input } });
  }),
  updateMovie: procedure.input(Movie).mutation(({ input }) => {
    return prisma.movie.update({ where: { id: input.id }, data: input });
  }),
});
