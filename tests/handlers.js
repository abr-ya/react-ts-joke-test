import { rest } from "msw";

const SERVER = "https://v2.jokeapi.dev";

export const handlers = [
  rest.get(`${SERVER}/joke/Programming`, (_req, res, ctx) =>
    res(
      ctx.json({
        category: "Programming",
        joke: "Programming is 10% science, 20% ingenuity, and 70% ...",
      }),
    ),
  ),
];
