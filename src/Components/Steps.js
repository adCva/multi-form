import React from 'react'

function Steps() {
  return (
    <div className='steps-container'>

      <div className='step-group'>
        <h1>1</h1>
        <div className='step-info'>
          <p>Step 1</p>
          <h2>Your info</h2>
        </div>
      </div>

      <div className='step-group'>
        <h1>2</h1>
        <div className='step-info'>
          <p>Step 2</p>
          <h2>Select Plan</h2>
        </div>
      </div>

      <div className='step-group'>
        <h1>3</h1>
        <div className='step-info'>
          <p>Step 3</p>
          <h2>Add-ons</h2>
        </div>
      </div>

      <div className='step-group'>
        <h1>4</h1>
        <div className='step-info'>
          <p>Step 4</p>
          <h2>Summary</h2>
        </div>
      </div>

    </div>
  )
}

export default Steps