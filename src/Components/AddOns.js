import React, { useState } from 'react';

function AddOns() {
    const [addOns, setAddOns] = useState(['online', 'storage', 'profile']);


    const selectAddOn = (el) => {
        if (addOns.includes(el)) {
            let existingElements = [...addOns];
            existingElements.splice(existingElements.indexOf(el), 1);
            setAddOns(existingElements);
        } else {
            let existingElements = [...addOns];
            existingElements.push(el);
            setAddOns(existingElements);
        }
    };


    return (
        <div className='form-details'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className='form-group'>
                <div className='addon-group'>
                    <input type="checkbox" onChange={() => selectAddOn('online')} />
                    <div className='addon-info'>
                        <h2>Online service</h2>
                        <p>Access to multiplayer games</p>
                    </div>
                </div>
                <p>+$1/mo</p>
            </div>
            <div className='form-group'>
                <div className='addon-group'>
                    <input type="checkbox" onChange={() => selectAddOn('storage')} />
                    <div className='addon-info'>
                        <h2>Larger storage</h2>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                </div>
                <p>+$2/mo</p>
            </div>
            <div className='form-group'>
                <div className='addon-group'>
                    <input type="checkbox" onChange={() => selectAddOn('profile')} />
                    <div className='addon-info'>
                        <h2>Customizable profile</h2>
                        <p>Custom theme on your profile</p>
                    </div>
                </div>
                <p>+$2/mo</p>
            </div>
        </div>
    )
}

export default AddOns;