import TextField from "@mui/material/TextField";

import { shallow, render } from "enzyme";
import { SearchBar } from "..";

describe("<SearchBar  />", () => {
  it("should match snapshot", () => {
    const loadingIndicator = render(<SearchBar filterBy={undefined} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it("should call onChange prop", () => {
    const onSearchMock = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: "the-value" },
    };
    const component = shallow(<TextField onChange={onSearchMock} />);
    component.find("input").simulate("change", event);
    expect(onSearchMock).toBeCalledWith("the-value");
  });
});
