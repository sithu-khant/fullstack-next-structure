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
  dateFrom: "",
  dateTo: "",
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
      >
        <Form formData={formData} setFormData={setFormData} />
      </Dialog >
    </>
  )
}

export default FormDialog;