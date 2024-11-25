import React from 'react';
import Image from 'next/image';
import TooltipUtils from './../utils/TooltipUtils';

const IconSidebar = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between p-2 border-r-muted-gray border'>
      <div className='icons-div'>
        <Image className='mt-2 mb-3' src={"/balex-logo-200.png"} alt='Logo' width={30} height={30} />

        <TooltipUtils target='.pi-credit-card' content='Subscriptions' />
        <i className='pi pi-credit-card icon active'></i>

        <TooltipUtils target='.pi-wallet' content='Finance' />
        <i className='pi pi-wallet icon'></i>
      </div>

      <div className='icons-div'>

        <TooltipUtils target='.pi-user' content='Profile' />
        <i className='pi pi-user icon'></i>

        <TooltipUtils target='.pi-info-circle' content='Info' />
        <i className='pi pi-info-circle icon'></i>
      </div>
    </div>
  )
}

export default IconSidebar;