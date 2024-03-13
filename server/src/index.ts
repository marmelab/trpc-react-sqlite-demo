import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";

import { appRouter } from "./router";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(4000);

export type AppRouter = typeof appRouter;
