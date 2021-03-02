import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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

  //   fireEvent.click(checkbox);
  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  // popover starts out hidden
  //query -> command to use chen you expect something NOT to be in the DOM
  const noPopover = screen.queryByText(/no ice cream actually delivered/i);
  expect(noPopover).not.toBeInTheDocument();

  // popover appears upon mouseover the label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  // simulate mouse hover
  userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream actually delivered/i);
  expect(popover).toBeInTheDocument();

  //popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream actually delivered/i)
  );
});
