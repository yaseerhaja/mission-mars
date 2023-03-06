import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../index";

describe("<Header />", () => {
  test("it should mount", () => {
    render(<Header title={"Mission Mars"} />);

    const header = screen.getByTestId("Header");

    expect(header).toBeInTheDocument();
  });
});
