import { PrismaClient } from "@prisma/client";
import { directorRouter } from "./director/router";
import { movieRouter } from "./movie/router";
import { router } from "./trpc";

export const prisma = new PrismaClient();

export const appRouter = router({
  movie: movieRouter,
  director: directorRouter,
});
