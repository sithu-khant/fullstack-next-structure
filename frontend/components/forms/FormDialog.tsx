"use client"

import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import Form from './Form';
import { Subscription } from '@/constants/types';

const defaultFormData: Subscription = {
  name: "",
  provider: "",
  type: "",
  billingCycle: "",
  paymentMethod: "",
  dateFrom: null,
  dateTo: null,
  autoRenew: true,
  plan: "",
  cost: 0,
  currency: "",
  website: "",
  category: "",
  notes: "",
};

const FormDialog = ({ clickForm, setClickForm }: any) => {

  const [formData, setFormData] = useState(defaultFormData);

  const handleSave = (e: any) => {
    e.preventDefault();

    console.log(formData);
  }

  const footerButton = () => {
    return (
      <>
        <div className='flex justify-end bg-white pt-5'>
          <p
            className='w-[90px] text-center bg-primary-color hover:bg-secondary-color text-input-field-background px-3 py-2 cursor-default rounded-lg'
            onClick={handleSave}
          >
            Save
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <Dialog
        // showHeader={false}
        header={`New Item`}
        resizable={false}
        draggable={false}
        style={{ width: '50vw' }}
        visible={clickForm}
        onHide={() => { if (!clickForm) return; setClickForm(false); }}
        footer={footerButton}
      >
        <Form formData={formData} setFormData={setFormData} />
      </Dialog >
    </>
  )
}

export default FormDialog;