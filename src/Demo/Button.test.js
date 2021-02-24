import { render, screen, fireEvent } from "@testing-library/react";
import { replaceCamelWithSpaces } from "./Button";
import Button from "./Button";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', {name: /learn react/i});
//   expect(linkElement).toBeInTheDocument();
// });

test("button has correct initial color", () => {
  render(<Button />);

  // find element with a role of button and his text
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns blue when cliked", () => {
  render(<Button />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // interact with the DOM : click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

// test('initial conditions', () => {
//   render(<App />);

//   // check that the button starts out enabled
//   const colorButton = screen.getByRole('button', { name: 'Change to blue' });
//   expect(colorButton).toBeEnabled();

//   // check that the checkbox starts out unchecked
//   const checkbox = screen.getByRole('checkbox');
//   expect(checkbox).not.toBeChecked();
// })

//combine the tests with DESCRIBE

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for ONE inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for MULTIPLE inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
