import styles from "./App.module.css";
import ButtonContainer from "./components/buttonsContainer";
import Display from "./components/display";
import { useState } from "react";
function App() {
  let [displayCalVal, setDisplayCalVal] = useState(""); // declare the state
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setDisplayCalVal("");
    } else if (buttonText === "=") {
      const result = eval(displayCalVal);
      setDisplayCalVal(result);
    } else {
      const newDisplayValue = displayCalVal + buttonText;
      setDisplayCalVal(newDisplayValue); // passing the props
    }

    console.log(buttonText);
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={displayCalVal}></Display>
      {/* display the given props only */}
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      {/* button container taking a method as a prop and bubble up the behaviour to
      parent, whenever any button click it call the parent and that parent
      onButtonClick method set the state again and again as it repaints the
    app  */}
    </div>
  );
}

export default App;
