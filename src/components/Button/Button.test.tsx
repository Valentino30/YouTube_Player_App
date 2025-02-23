import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders without errors", () => {
    render(<Button name="Button" onClick={() => {}} />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
  it("calls the onClick function when clicked", () => {
    const onClick = vi.fn();
    render(<Button name="Button" onClick={onClick} />);
    screen.getByText("Button").click();
    expect(onClick).toHaveBeenCalled();
  });
  it("is disabled when passed the disabled prop", () => {
    render(<Button name="Button" onClick={() => {}} disabled />);
    expect(screen.getByText("Button")).toBeDisabled();
  });
  it("matches the snapshot", () => {
    const { asFragment } = render(<Button name="Button" onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
