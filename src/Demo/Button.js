import { useState } from "react";
import CheckboxQuiz from "./CheckboxQuiz";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function Button() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>

      <input type="checkbox" />

      <CheckboxQuiz />
    </div>
  );
}

export default Button;
