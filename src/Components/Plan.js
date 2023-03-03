import React, { useState } from 'react';

function Plan() {
    const [planType, setPlanType] = useState(1);
    const [planDuration, setPlanDuration] = useState('monthly');

    const planDurationChange = () => {
        setPlanDuration(planDuration === "monthly" ? "yearly" : "monthly");
    }


    const planTypeChange = (type) => {
        setPlanType(type);
    }
     


  return (
    <div className='form-details'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={planType === 1 ? "form-group-two form-group-two-active" : "form-group-two"} onClick={() => planTypeChange(1)}>
          <img src="./images/icon-arcade.svg" alt="Arcade" loading='lazy'/>
          <div className='plan-info'>
              <h5>Arcade</h5>
              <p>$9/mo</p>
              <h6 className={planDuration === 'monthly' ? "offer-hide" : "offer"}>2 months free</h6>
          </div>
      </div>

      <div className={planType === 2 ? "form-group-two form-group-two-active" : "form-group-two"} onClick={() => planTypeChange(2)}>
          <img src="./images/icon-advanced.svg" alt="Advanced" loading='lazy'/>
          <div className='plan-info'>
              <h5>Advanced</h5>
              <p>$12/mo</p>
              <h6 className={planDuration === 'monthly' ? "offer-hide" : "offer"}>2 months free</h6>
          </div>
      </div>

      <div className={planType === 3 ? "form-group-two form-group-two-active" : "form-group-two"} onClick={() => planTypeChange(3)}>
          <img src="./images/icon-pro.svg" alt="Pro" loading='lazy'/>
          <div className='plan-info'>
              <h5>Pro</h5>
              <p>$15/mo</p>
              <h6 className={planDuration === 'monthly' ? "offer-hide" : "offer"}>2 months free</h6>
          </div>
      </div>

      <div className='slider-container'>
          <h6 className={planDuration === 'monthly' ? "plan-type-bold" : "plan-type-simple"}>Monthly</h6>
          <div className='plan-switcher' onClick={planDurationChange}>
            <button className={planDuration === 'monthly' ? "switcher-ball switcher-ball-left" : "switcher-ball switcher-ball-right"}></button>
          </div>
          <h6 className={planDuration === 'yearly' ? "plan-type-bold" : "plan-type-simple"}>Yearly</h6>
      </div>
    </div>
  )
}

export default Plan;