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
        <div className='max-w-[800px] m-auto'>

          <div className='flex items-center justify-end m-1 mt-3'>
            <div className='flex items-center hover:bg-slate-50 px-2 py-2 cursor-pointer rounded'>
              <i className="pi pi-star mr-3 text-sm" style={{ fontWeight: "900" }}></i>
              <p className=''>Favorite</p>
            </div>

            <div className='flex items-center hover:bg-slate-50 px-2 py-2 cursor-pointer rounded'>
              <i className="pi pi-pencil mr-3 text-xs" style={{ fontWeight: "900" }}></i>
              <p className=''>Edit</p>
            </div>

            <div>
              <TieredMenu model={subItemItems({ handleFavorite, handleDelete })} popup ref={itemMenu} breakpoint="28px" />
              <i
                className="pi pi-ellipsis-v p-1 pl-2 text-sm text-slate-600 cursor-pointer"
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