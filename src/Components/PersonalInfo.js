import React, { useState } from 'react';
// Redux.
import { useDispatch } from 'react-redux';
import { goForward } from "../Redux/stepsSlice";

function PersonalInfo() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  // Handle form submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(goForward(2));
    console.log(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
  }


  return (
    <div className='personalInfo-container'>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      {/* ============== Form ============== */}
      <form onSubmit={handleSubmit}>
        {/*  Form Group */}
        <div className='form-group'>
          <div className='group-info'>
            <label>Name</label>
            <p>Error</p>
          </div>
          <input type="text" placeholder='e.g.Stephen King' onChange={(e) => setName(e.target.value)} />
        </div>
        {/*  Form Group */}
        <div className='form-group'>
          <div className='group-info'>
            <label>Email Address</label>
            <p>Error</p>
          </div>
          <input type="email" placeholder='e.g.stephenking@lorem.com' onChange={(e) => setEmail(e.target.value)} />
        </div>
        {/*  Form Group */}
        <div className='form-group'>
          <div className='group-info'>
            <label>Phone Number</label>
            <p>Error</p>
          </div>
          <input type="text" placeholder='e.g.+1 234 567 890' onChange={(e) => setPhone(e.target.value)} />
        </div>
        {/*  Submit */}
        <button className='submit-btn'>Next Step</button>
      </form>
      {/* ============== End of Form ============== */}
    </div>
  )
}

export default PersonalInfo;