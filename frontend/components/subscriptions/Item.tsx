"use client"

import React, { useRef } from 'react'
import { subItemItems } from '@/constants';
import { TieredMenu } from 'primereact/tieredmenu';

const Item = () => {

  const itemMenu: any = useRef(null);

  const handleFavorite = () => { };
  const handleDelete = () => { };


  return (
    <>
      <div className='w-full'>
        <div className='max-w-[900px] m-auto'>

          <div>
            <div>
              <i className="category-table-view-icon pi pi-pencil p-2 text-sm text-slate-500 cursor-pointer"></i>
              Edit
            </div>

            <div>
              <TieredMenu model={subItemItems({ handleFavorite, handleDelete })} popup ref={itemMenu} breakpoint="28px" />
              <i
                className="pi pi-ellipsis-v p-1 text-sm text-slate-600 cursor-pointer"
                onClick={(e) => itemMenu.current.toggle(e)}
              ></i>
            </div>
          </div>

          <div>
            Heading
          </div>

          <div>
            Body
          </div>

        </div>
      </div>
    </>
  )
}

export default Item;