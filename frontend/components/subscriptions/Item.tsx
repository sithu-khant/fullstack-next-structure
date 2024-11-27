"use client"

import React, { useRef } from 'react';
import { Knob } from 'primereact/knob';
import { Chip } from 'primereact/chip';

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

          <div className='max-w-[750px] m-auto'>
            <div>
              <p className='text-xl font-semibold mt-1 mb-6'>🏠 Namecheap</p>
            </div>

            <div>

              <div className='mb-3 flex items-center'>

                <Knob
                  value={55}
                  showValue={false}
                  valueColor={"#0056d6"}
                  size={30}
                  strokeWidth={18}
                  className='mr-3'
                />

                <div>
                  <p className='subscriptions-item-label'>Day left</p>
                  <p className='subscriptions-item-value'>365 Days</p>
                </div>
              </div>

              <div className='mb-3'>
                <p className='subscriptions-item-label'>Date from</p>
                <p className='subscriptions-item-value'>Wed Nov 27, 2024</p>
              </div>

              <div className='mb-3'>
                <p className='subscriptions-item-label'>Date to</p>
                <p className='subscriptions-item-value'>Wed Nov 27, 2025</p>
              </div>

              <div className='mb-3'>
                <p className='subscriptions-item-label'>Webiste</p>

                <a href={`https://google.com`} target='_blank' className='subscriptions-item-value text-slate-500'>
                  https://
                  <span className='text-primary-color'>google.com</span>
                </a>
              </div>

              <div className='mb-3'>
                <p className='subscriptions-item-label'>Category</p>
                <Chip label="🏠 Personal" className='bg-slate-100 text-slate-500 text-xs font-semibold mt-1' />
              </div>

              <div className='mt-8'>
                <p className='subscriptions-item-label'>Note</p>
                <p className='subscriptions-item-value'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel obcaecati culpa nostrum temporibus cumque? Iusto sint eaque voluptatem tempora, repellendus incidunt, libero fugiat voluptatum magni, nostrum mollitia maxime quis!</p>
              </div>

              <div className='mt-8 flex items-center'>
                <i className='pi pi-history mr-1 text-xs text-slate-600' style={{ fontWeight: "800" }}></i>
                <p className='subscriptions-item-value'>Last edited: Wed Nov 27, 2024</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Item;