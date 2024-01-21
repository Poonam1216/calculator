import styles from "./App.module.css";
import ButtonContainer from "./components/buttonsContainer";
import Display from "./components/display";
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
