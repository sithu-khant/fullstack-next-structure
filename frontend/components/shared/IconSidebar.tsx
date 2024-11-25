import React from 'react';
import Image from 'next/image';
import { Tooltip } from "primereact/tooltip";

const IconSidebar = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between p-2 border-r-soft-gray border'>
      <div className='icons-div'>
        <Image className='mt-2 mb-3' src={"/balex-logo-200.png"} alt='Logo' width={30} height={30} />


        <i className='pi pi-credit-card icon active'></i>


        <i className='pi pi-wallet icon'></i>
      </div>

      <div className='icons-div'>

        <i className='pi pi-user icon'></i>


        <i className='pi pi-info-circle icon'></i>
      </div>
    </div>
  )
}

export default IconSidebar;