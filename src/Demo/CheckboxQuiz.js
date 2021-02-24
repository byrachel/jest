import React, { useState } from 'react';

function CheckboxQuiz() {

  const [ disabled, setDisabled ] = useState(false);

  return (
    <div>

        <input
            type="checkbox"
            id="my-checkbox"
            defaultChecked={disabled}
            aria-checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)} />

        <label
            htmlFor="my-checkbox">
            Check this box
        </label>

        <button
            type="button"
            style={disabled ? {backgroundColor: 'gray' } : { backgroundColor: 'blue' }}
            disabled={disabled}>
            BUTTON
        </button>

    </div>
  );
}

export default CheckboxQuiz;
