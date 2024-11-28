import React, { useRef } from 'react';

import { subscriptionsSidebarItems } from '@/constants';
import { TieredMenu } from 'primereact/tieredmenu';

const SubscriptionsSidebar = () => {

  const categorySidebarMenu: any = useRef(null);
  const handleTableView = () => { };
  const handleTrash = () => { };

  return (
    <>
      <div className='w-[240px] h-screen overflow-y-scroll scrollbar-thin border border-y-0 border-l-0 p-2'>

        <div className='mt-1 p-1 flex items-center justify-end'>

          <div className='flex items-center bg-secondary-color text-input-field-background mr-1 px-3 py-1 cursor-pointer rounded-md'>
            <i className="pi pi-plus mr-2 text-xs" style={{ fontWeight: "800" }}></i>
            <p className='text-sm'>New Item</p>
          </div>

          <div>
            <TieredMenu model={subscriptionsSidebarItems({ handleTableView, handleTrash })} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v p-1 pl-2 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            ></i>
          </div>

        </div>

        <div>
          Items
        </div>

      </div>
    </>
  )
}

export default SubscriptionsSidebar;