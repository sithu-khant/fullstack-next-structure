"use client"

import React, { useState } from 'react';
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';

import { billingCycles, currencyCodes, paymentMethods, subscriptionTypes } from '@/constants';

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
            <label htmlFor={`dateFrom`} className='form-label'>Date From</label>
            <Calendar
              value={formData.dateFrom}
              onChange={(e) => handleInputChange(e, "dateFrom")}
              className='input-field'
            />
          </div>

          {/* dateTo */}
          <div>
            <label htmlFor={`dateTo`} className='form-label'>Date To</label>
            <Calendar
              value={formData.dateTo}
              onChange={(e) => handleInputChange(e, "dateTo")}
              className='input-field'
            />
          </div>

          {/* plan */}
          <div>
            <label htmlFor={`plan`} className='form-label'>Plan</label>
            <input
              value={formData.plan}
              onChange={(e) => handleInputChange(e, "plan")}
              id={`plan`}
              className='input-field'
            />
          </div>

          {/* paymentMethod */}
          <div>
            <label htmlFor={`paymentMethod`} className='form-label'>Payment Method</label>
            <Dropdown
              value={formData.paymentMethod}
              onChange={(e) => handleInputChange(e, "paymentMethod")}
              options={paymentMethods}
              optionLabel="type"
              className="w-full md:w-14rem"
              filter
            />
          </div>

          {/* cost */}
          <div>
            <label htmlFor={`cost`} className='form-label'>Cost</label>
            <input
              value={formData.cost}
              onChange={(e) => handleInputChange(e, "cost")}
              id={`cost`}
              className='input-field'
              type='number'
            />
          </div>

          {/* currency */}
          <div>
            <label htmlFor={`Name`} className='form-label'>Currency</label>

            <Dropdown
              value={formData.currency}
              onChange={(e) => handleInputChange(e, "currency")}
              options={currencyCodes}
              optionLabel="currency"
              className="w-full md:w-14rem"
              filter
            />
          </div>

          {/* website */}
          <div>
            <label htmlFor={`website`} className='form-label'>Website</label>
            <input
              value={formData.website}
              onChange={(e) => handleInputChange(e, "website")}
              id={`Name`}
              className='input-field'
            />
          </div>

          {/* notes */}
          <div>
            <label htmlFor={`notes`} className='form-label'>Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleInputChange(e, "notes")}
              id={`notes`}
              className='input-field'
            >
            </textarea>
          </div>

        </div>

      </form>
    </>
  )
}

export default Form;