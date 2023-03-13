import React from 'react';

function PersonalInfo() {
  return (
    <div className='form-details'>
      <h1 className='title'>Personal info</h1>
      <p className='desc'>Please provide your name, email address, and phone number.</p>

      <div className='personal-form-group'>
          <label>Name</label>
          <input type="text" placeholder='e.g. Stephen King' />
      </div>
      <div className='personal-form-group'>
          <label>Email Adress</label>
          <input type="email" placeholder='e.g. stephenking@lorem.com' />
      </div>
      <div className='personal-form-group'>
          <label>Phone Number</label>
          <input type="text" placeholder='e.g. +0 123 456 789' />
      </div>

  </div>
  )
}

export default PersonalInfo;