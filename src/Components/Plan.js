import React, { useState } from 'react';
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { goForward, goBackwards } from "../Redux/stepsSlice";

function Plan() {
  const dispatch = useDispatch();
  const isChangeActive = useSelector((state) => state.step.isChangeActive);

  return (
    <div className='plan-container'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className='plans-details-container'>

        <div className='plan-card'>
          <img src="./images/icon-arcade.svg" alt="Arcade" loading='lazy'/>
          <div className='plan-info'>
            <h5>Arcade</h5>
            <p>$9/mo</p>
            <h6>2 months free</h6>
          </div>
        </div>

        <div className='plan-card'>
          <img src="./images/icon-advanced.svg" alt="Advanced" loading='lazy'/>
          <div className='plan-info'>
            <h5>Advanced</h5>
            <p>$12/mo</p>
            <h6>2 months free</h6>
          </div>
        </div>

        <div className='plan-card'>
          <img src="./images/icon-pro.svg" alt="Pro" loading='lazy'/>
          <div className='plan-info'>
            <h5>Pro</h5>
            <p>$15/mo</p>
            <h6>2 months free</h6>
          </div>
        </div>

        <div className='slider-container'>
          <h6>Monthly</h6>
          <button>X</button>
          <h6>Yearly</h6>
        </div>

      </div>
      <div className='direction-buttons'>
        <button onClick={isChangeActive ? () => dispatch(goBackwards(4)) : () => dispatch(goBackwards(1))}>{isChangeActive ? "Discard" : "Go Back"}</button>
        <button onClick={isChangeActive ? () => dispatch(goForward(4)) : () => dispatch(goForward(3))}>{isChangeActive ? "Update" : "Next Step"}</button>
      </div>
    </div>
  )
}

export default Plan;