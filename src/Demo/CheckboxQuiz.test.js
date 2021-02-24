import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxQuiz from './CheckboxQuiz';

test('switch checkbox state', () => {
    render(<CheckboxQuiz />);

    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox', { name: 'Check this box'});
    const button = screen.getByRole('button');

    // interact with the DOM : check the input
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // interact with the DOM : uncheck the input
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: 'gray' });
    // expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

});

