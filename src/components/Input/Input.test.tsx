import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders without errors", () => {
    render(<Input value="test" onChange={() => {}} />);
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  });
  it("calls the onChange function when the value changes", async () => {
    const onChange = vi.fn();
    render(<Input value="test" onChange={onChange} />);
    const input = screen.getByDisplayValue("test");
    await userEvent.type(input, "new value");
    expect(onChange).toHaveBeenCalled();
  });
  it("has a placeholder when passed the placeholder prop", () => {
    render(<Input value="test" onChange={() => {}} placeholder="Type here" />);
    expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
  });
  it("has a type of text when no type prop is passed", () => {
    render(<Input value="test" onChange={() => {}} />);
    expect(screen.getByDisplayValue("test")).toHaveAttribute("type", "text");
  });
  it("matches the snapshot", () => {
    const { asFragment } = render(<Input value="test" onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
