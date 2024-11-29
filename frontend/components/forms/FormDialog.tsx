"use client"

import React from 'react';
import { Dialog } from 'primereact/dialog';
import Form from './Form';

const FormDialog = ({ clickForm, setClickForm }: any) => {

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
        <Form />
      </Dialog >
    </>
  )
}

export default FormDialog;