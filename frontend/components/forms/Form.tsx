"use client"

import React, { useRef, useState } from 'react';
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

import { billingCycles, currencyCodes, paymentMethods, subscriptionTypes } from '@/constants';
import { useClickOutside } from 'primereact/hooks';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const Form = ({ formData, setFormData }: any) => {

  const emojiOverlayRef = useRef(null);
  const [emoji, setEmoji] = useState("😃");
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);

  useClickOutside(emojiOverlayRef, () => {
    setIsChooseEmoji(false);
  })

  const handleEmojiSelect = (emoji: any) => {
    setEmoji(emoji.native);
    setIsChooseEmoji(false);
  };

  const handleInputChange = (e: any, field: string) => {
    e.preventDefault();

    setFormData({ ...formData, [field]: e.target.value });
  }

  return (
    <>
      <form action="" className='custom-scrollbar scrollbar-thin'>

        <div>

          {/* name */}
          <div>
            <label htmlFor={`name`} className='form-label'>Name</label>

            <div className='flex'>

              <input
                type="text"
                value={emoji}
                readOnly
                className='emoji-input-field'
                onClick={() => setIsChooseEmoji(!isChooseEmoji)}
              />
              <input
                id={`name`}
                className='input-field'
                onChange={(e) => handleInputChange(e, "name")}
              />
            </div>

            <div ref={emojiOverlayRef} className={`${isChooseEmoji ? "block" : "hidden"} absolute z-10`}>
              <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                theme="light"
                previewPosition="none"
                maxFrequentRows="0"
                className="z-10"
              />
            </div>
          </div>

          <div className='form-fields-container'>

            {/* autoRenew */}
            <div className='form-field-container flex items-center'>
              <p className='form-label mr-2'>Auto Renew</p>
              <InputSwitch
                checked={formData.autoRenew}
                onChange={(e) => handleInputChange(e, "autoRenew")}
                id="autoRenew"
              />
            </div>

            {/* billingCycle */}
            <div className='form-field-container'>
              <label htmlFor={`billingCycle`} className='form-label'>Billing Cycle</label>
              <Dropdown
                value={formData.billingCycle}
                onChange={(e) => handleInputChange(e, "billingCycle")}
                options={billingCycles}
                optionLabel="billingCycle"
                className="ring-0"
                filter
              />
            </div>
          </div>

          <div className='form-fields-container'>
            {/* provider */}
            <div className='form-field-container'>
              <label htmlFor={`provider`} className='form-label'>Provider</label>
              <input
                value={formData.provider}
                onChange={(e) => handleInputChange(e, "provider")}
                id={`provider`}
                className='input-field'
              />
            </div>

            {/* type */}
            <div className='form-field-container'>
              <label htmlFor={`type`} className='form-label'>Type</label>
              <Dropdown
                value={formData.type}
                onChange={(e) => handleInputChange(e, "type")}
                options={subscriptionTypes}
                optionLabel="type"
                className="ring-0"
                filter
              />
            </div>
          </div>

          <div className='form-fields-container'>

            {/* dateFrom */}
            <div className='form-field-container'>
              <label htmlFor={`dateFrom`} className='form-label'>Date From</label>
              <Calendar
                value={formData.dateFrom}
                onChange={(e) => handleInputChange(e, "dateFrom")}
                className='input-field'
              />
            </div>

            {/* dateTo */}
            <div className='form-field-container'>
              <label htmlFor={`dateTo`} className='form-label'>Date To</label>
              <Calendar
                value={formData.dateTo}
                onChange={(e) => handleInputChange(e, "dateTo")}
                className='input-field'
              />
            </div>

          </div>

          <div className='form-fields-container'>

            {/* plan */}
            <div className='form-field-container'>
              <label htmlFor={`plan`} className='form-label'>Plan</label>
              <input
                value={formData.plan}
                onChange={(e) => handleInputChange(e, "plan")}
                id={`plan`}
                className='input-field'
              />
            </div>

            {/* paymentMethod */}
            <div className='form-field-container'>
              <label htmlFor={`paymentMethod`} className='form-label'>Payment Method</label>
              <Dropdown
                value={formData.paymentMethod}
                onChange={(e) => handleInputChange(e, "paymentMethod")}
                options={paymentMethods}
                optionLabel="type"
                className="ring-0"
                filter
              />
            </div>

          </div>

          <div className='form-fields-container'>

            {/* cost */}
            <div className='form-field-container'>
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
            <div className='form-field-container'>
              <label htmlFor={`Name`} className='form-label'>Currency</label>

              <Dropdown
                value={formData.currency}
                onChange={(e) => handleInputChange(e, "currency")}
                options={currencyCodes}
                optionLabel="currency"
                className="ring-0"
                filter
              />
            </div>

          </div>

          {/* website */}
          <div className='mt-2'>
            <label htmlFor={`website`} className='form-label'>Website</label>
            <input
              value={formData.website}
              onChange={(e) => handleInputChange(e, "website")}
              id={`Name`}
              className='input-field'
            />
          </div>

          {/* notes */}
          <div className='mt-2'>
            <label htmlFor={`notes`} className='form-label'>Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => handleInputChange(e, "notes")}
              id={`notes`}
              className='input-field'
              rows={8}
            >
            </textarea>
          </div>

          {/* Buttons */}


        </div>

      </form>
    </>
  )
}

export default Form;