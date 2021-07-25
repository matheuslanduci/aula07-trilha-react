import { render, screen, waitFor } from "@testing-library/react";
import { Async } from "../../components/Async";

describe("Async component", () => {
  it("should render button", async () => {
    render(<Async />);

    expect(screen.getByText("Hello, World!")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Button")).toBeInTheDocument();
    });
  });
});
