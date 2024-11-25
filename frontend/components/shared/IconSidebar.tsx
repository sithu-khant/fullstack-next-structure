import React from 'react';
import Image from 'next/image';

const IconSidebar = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between p-3'>
      <div className='flex flex-col'>
        <Image src={"/balex-logo-200.png"} alt='Logo' width={30} height={30} />
        <i className='pi pi-credit-card text-xl'></i>
        <i className='pi pi-wallet text-xl'></i>
      </div>

      <div className='flex flex-col '>
        <i className='pi pi-user text-xl'></i>
        <i className='pi pi-info-circle text-xl'></i>
      </div>
    </div>
  )
}

export default IconSidebar;