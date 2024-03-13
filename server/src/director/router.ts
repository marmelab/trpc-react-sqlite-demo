import { z } from "zod";

import { procedure, router } from "../trpc";

import { prisma } from "../router";

export const directorRouter = router({
  getDirectors: procedure.query(() => {
    return prisma.director.findMany();
  }),
  getDirectorById: procedure
    .input(z.string().nullable())
    .query(({ input }) =>
      prisma.director.findUnique({ where: { id: input ?? undefined } })
    ),
  createDirector: procedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      return prisma.director.create({ data: { name: input.name } });
    }),
  deleteDirector: procedure.input(z.string()).mutation(({ input }) => {
    return prisma.director.delete({ where: { id: input } });
  }),
});
