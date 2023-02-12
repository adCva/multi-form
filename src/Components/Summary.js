import React from 'react';
// Redux.
import { useDispatch } from 'react-redux';
import { goForward, goBackwards, goToSpecificStep, resetChange } from "../Redux/stepsSlice";

function Summary() {
  const dispatch = useDispatch();
  
  const endCycle = () => {
    dispatch(goForward(5));
    dispatch(resetChange);
  }


  return (
    <div className='summary-container'>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className='summary-contents'>

        <div className='plan-review'>
          <div className='plan-change'>
            <h2>Arcade (Monthly)</h2>
            <button onClick={() => dispatch(goToSpecificStep(2))}>Change</button>
          </div>
          <h6>$9/mo</h6>
        </div>

        <div className='addOn-review'>
          <h6>Online service</h6>
          <p>+1$/mo</p>
        </div>

        <div className='addOn-review'>
          <h6>Larger storage</h6>
          <p>+2$/mo</p>
        </div>

        <div className='total-price'>
          <h6>Total (per month)</h6>
          <p>+12/mo</p>
        </div>

      </div>
      <div className='direction-buttons'>
        <button onClick={() => dispatch(goBackwards(3))}>Go Back</button>
        <button onClick={() => endCycle()}>Next Step</button>
      </div>
    </div>
  )
}

export default Summary;