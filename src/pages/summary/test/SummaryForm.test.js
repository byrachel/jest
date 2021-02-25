import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial conditions", () => {
  render(<SummaryForm />);

  // check that the checkbox starts unchecked
  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  // check that the button is disabled
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("check if the first click enable button and disable on a second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /Terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  // click on checkbox
  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  // click on checkbox
  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
