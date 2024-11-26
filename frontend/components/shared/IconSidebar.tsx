import React from 'react';
import Image from 'next/image';
import TooltipUtils from './../utils/TooltipUtils';

const IconSidebar = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between p-2 border border-y-0 border-r-muted-gray'>
      <div className='icons-div'>
        <Image className='mt-2 mb-3' src={"/balex-logo-200.png"} alt='Logo' width={30} height={30} />

        <TooltipUtils target='.subscriptions-icon-iconsidebar' content='Subscriptions' />
        <i className='subscriptions-icon-iconsidebar pi pi-credit-card icon active'></i>

        <TooltipUtils target='.finance-icon-iconsidebar' content='Finance' />
        <i className='finance-icon-iconsidebar pi pi-wallet icon'></i>
      </div>

      <div className='icons-div'>

        <TooltipUtils target='.profile-icon-iconsidebar' content='Profile' />
        <i className='profile-icon-iconsidebar pi pi-user icon'></i>

        <TooltipUtils target='.info-icon-iconsidebar' content='Info' />
        <i className='info-icon-iconsidebar pi pi-info-circle icon'></i>
      </div>
    </div>
  )
}

export default IconSidebar;