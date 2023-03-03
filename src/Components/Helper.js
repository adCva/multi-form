import React, { useState } from 'react';

function Helper() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className='helper-wrapper'>
        <form className='form-container' onSubmit={handleSubmit}>

            {/* =================== Add Ons =================== */}
            <div className='form-details'>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
                <div className='form-group'>
                    <div className='addon-group'>
                        <input type="checkbox" />
                        <div className='addon-info'>
                        <h2>Online service</h2>
                        <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <p>+$1/mo</p>
                </div>
                <div className='form-group'>
                    <div className='addon-group'>
                        <input type="checkbox" />
                        <div className='addon-info'>
                        <h2>Larger storage</h2>
                        <p>Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <p>+$2/mo</p>
                </div>
                <div className='form-group'>
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

            {/* =================== Finishing =================== */}




        </form>
    </div>
  )
}

export default Helper