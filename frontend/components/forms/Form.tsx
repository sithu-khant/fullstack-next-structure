"use client"

import React, { useState } from 'react';
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from 'primereact/dropdown';
import { billingCycles, subscriptionTypes } from '@/constants';

const Form = ({ formData, setFormData }: any) => {

  const handleInputChange = (e: any, field: string) => {
    e.preventDefault();
    setFormData({ ...formData, [field]: e.value });
  }

  return (
    <>
      <form action="" className='custom-scrollbar scrollbar-thin'>

        <div>

          {/* name */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>

          {/* autoRenew */}
          <div className='flex'>
            <InputSwitch
              checked={formData.autoRenew}
              onChange={(e) => handleInputChange(e, "autoRenew")}
            />
            <p>Auto Renew</p>
          </div>

          {/* billingCycle */}
          <div>
            <label htmlFor={`billingCycle`} className='form-label'>Billing Cycle</label>
            <Dropdown
              value={formData.billingCycle}
              onChange={(e) => handleInputChange(e, "billingCycle")}
              options={billingCycles}
              optionLabel="billingCycle"
              className="w-full md:w-14rem"
              filter
            />
          </div>


          {/* provider */}
          <div>
            <label htmlFor={`provider`} className='form-label'>Provider</label>
            <input
              value={formData.provider}
              onChange={(e) => handleInputChange(e, "provider")}
              id={`provider`}
              className='input-field'
            />
          </div>

          {/* type */}
          <div>
            <label htmlFor={`type`} className='form-label'>Type</label>
            <Dropdown
              value={formData.type}
              onChange={(e) => handleInputChange(e, "type")}
              options={subscriptionTypes}
              optionLabel="type"
              className="w-full md:w-14rem"
              filter
            />
          </div>


          {/* dateFrom */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>



          {/* dateTo */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>



          {/* plan */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>



          {/* paymentMethod */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>



          {/* cost */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>



          {/* currency */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>



          {/* website */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>



          {/* notes */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Name</label>
            <input
              id={`Name`}
              className='input-field'
            />
          </div>

        </div>

      </form>
    </>
  )
}

export default Form;