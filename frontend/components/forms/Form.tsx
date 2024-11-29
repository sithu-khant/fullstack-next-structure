"use client"

import React, { useState } from 'react';

const Form = () => {

  const [value, setValue] = useState('');

  return (
    <>
      <form action="" className=''>

        <div>
          <label htmlFor={`Name`} className='block text-sm font-medium text-primary-color mb-1'>Name</label>
          <input
            id={`Name`}
            className='input-field'
          />
        </div>

      </form>
    </>
  )
}

export default Form;