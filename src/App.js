import Steps from './Components/Steps';
import determineComponent from "./Components/ComponentToRender";
import './Reset.css';
import './Scss/style.css';
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { goForward, goBackwards } from "./Redux/stepsSlice";

  function App() {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.step.currentStep);
    const handleSubmit = (e) => {
      e.preventDefault();
  }


  return (
    <div className="App">
      <div className='steps-wrapper'>
        <Steps />
      </div>
      <div className='helper-wrapper'>
        <form className='form-container' onSubmit={handleSubmit}>
          {determineComponent(currentStep)}
          <div className={currentStep === 5 ? "buttons-wrapper-hide" : "buttons-wrapper"}>
            <div className='buttons-container'>
              <button className={currentStep === 1 ? "back-btn-hide" : "back-btn"} onClick={() => dispatch(goBackwards())}>Go Back</button>
              <button className='next-btn' onClick={() => dispatch(goForward())}>{currentStep === 4 ? "Confirm" : "Next Step"}</button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;