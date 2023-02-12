import React from 'react';
// Redux.
import { useDispatch } from 'react-redux';
import { goForward, goBackwards } from "../Redux/stepsSlice";

function AddOns() {
  const dispatch = useDispatch();

  return (
    <div className='addOns-container'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      {/* ======= AddOn Cards Container ======= */}
      <div className='addons-cards-container'>
        {/* ======= AddOn Card ======= */}
        <div className='addon-card'>
          <div className='addon-group'>
            <input type="checkbox" />
            <div className='addon-info'>
              <h2>Online service</h2>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <p>+$1/mo</p>
        </div>
        {/* ======= AddOn Card ======= */}
        <div className='addon-card'>
          <div className='addon-group'>
            <input type="checkbox" />
            <div className='addon-info'>
              <h2>Larger storage</h2>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <p>+$2/mo</p>
        </div>
        {/*  ======= AddOn Card ======= */}
        <div className='addon-card'>
          <div className='addon-group'>
            <input type="checkbox" />
            <div className='addon-info'>
              <h2>Customizable profile</h2>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <p>+$2/mo</p>
        </div>

      </div>
      {/* ======= End of AddOn Cards Container ======= */}
      <div className='direction-buttons'>
        <button onClick={() => dispatch(goBackwards(2))}>Go Back</button>
        <button onClick={() => dispatch(goForward(4))}>Next Step</button>
      </div>
    </div>
  )
}

export default AddOns;