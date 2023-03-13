import React, { useState } from 'react';

function AddOns() {
    const [addOns, setAddOns] = useState([]);


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
            <h1 className='title'>Pick add-ons</h1>
            <p className='desc'>Add-ons help enhance your gaming experience.</p>

            <div className={addOns.includes('online') ? 'addon-form-group addon-form-group-selected' : 'addon-form-group'} onClick={() => selectAddOn("online")}>
                <div className='addon-left-group'>
                    {addOns.includes('online') ? (
                        <button className='addon-btn addon-checked'></button>
                    ) : (
                        <button className='addon-btn'></button>
                    )}
                    <div className='addon-info'>
                        <h6>Online service</h6>
                        <p>Access to multiplayer games</p>
                    </div>
                </div>
                <p className='addon-price'>+$1/mo</p>
            </div>

            <div className={addOns.includes('storage') ? 'addon-form-group addon-form-group-selected' : 'addon-form-group'} onClick={() => selectAddOn("storage")}>
                <div className='addon-left-group'>
                    {addOns.includes('storage') ? (
                        <button className='addon-btn addon-checked'></button>
                    ) : (
                        <button className='addon-btn'></button>
                    )}
                    <div className='addon-info'>
                        <h6>Larger storage</h6>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                </div>
                <p className='addon-price'>+$2/mo</p>
            </div>

            <div className={addOns.includes('profile') ? 'addon-form-group addon-form-group-selected' : 'addon-form-group'} onClick={() => selectAddOn("profile")}>
                <div className='addon-left-group'>
                    {addOns.includes('profile') ? (
                        <button className='addon-btn addon-checked'></button>
                    ) : (
                        <button className='addon-btn'></button>
                    )}
                    <div className='addon-info'>
                        <h6>Customizable profile</h6>
                        <p>Custom theme on your profile</p>
                    </div>
                </div>
                <p className='addon-price'>+$2/mo</p>
            </div>
            
        </div>
    )
}

export default AddOns;