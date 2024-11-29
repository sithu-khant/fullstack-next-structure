"use client"

import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';

const Form = ({ clickForm, setClickForm }: any) => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Dialog
        header="Header"
        visible={clickForm}
        showHeader={false}
        resizable={false}
        draggable={false}
        style={{ width: '50vw' }}
        onHide={() => { if (!clickForm) return; setClickForm(false); }}
      >
        Form
      </Dialog >
    </>
  )
}

export default Form;