import { render } from "@testing-library/react";

import TableView from "..";

describe("<TableView  />", () => {
  it("should match snapshot", () => {
    const loadingIndicator = render(<TableView />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
