import Steps from './Components/Steps';
import determineComponent from "./Components/ComponentToRender";
import './Reset.css';
import './Scss/style.css';
// Redux.
import { useSelector } from 'react-redux';

function App() {
  const currentStep = useSelector((state) => state.step.currentStep);

  return (
    <div className="App">
      <div className='steps-wrapper'>
        <Steps />
      </div>

      <div className='forms-wrapper'>
        { determineComponent(currentStep)}
      </div>
    </div>
  );
}

export default App;