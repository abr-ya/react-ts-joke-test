import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/components/App";

test("Renders category and joke", async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.getByText("category: Programming")).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(
      screen.getByText(
        "joke: Programming is 10% science, 20% ingenuity, and 70% ...",
      ),
    ).toBeInTheDocument();
  });
});
