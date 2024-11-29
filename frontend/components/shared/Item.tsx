"use client"

import React, { useRef } from 'react';
import { Knob } from 'primereact/knob';
import { Chip } from 'primereact/chip';

import { itemMenuItems } from '../utils/menuItems';
import CustomTieredMenu from '../utils/CustomTieredMenu';
import ItemField from './ItemField';

const Item = () => {

  const itemMenu: any = useRef(null);

  const handleFavorite = () => { };
  const handleDelete = () => { };


  return (
    <>
      <div className='w-full mx-auto'>
        <div className='max-w-[750px] md:m-auto p-3'>

          <div className='flex items-center justify-end m-1 mt-3'>
            <div className='item-menu-button'>
              <i className="pi pi-star mr-2 text-sm" style={{ fontWeight: "900" }}></i>
              <p className=''>Favorite</p>
            </div>

            <div className='item-menu-button'>
              <i className="pi pi-pencil mr-2 text-xs" style={{ fontWeight: "900" }}></i>
              <p className=''>Edit</p>
            </div>

            <div>

              <CustomTieredMenu icon={"pi-ellipsis-v"} model={itemMenuItems({ handleFavorite, handleDelete })} />

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
                  <ItemField label={`Day Left`} value={`365 Days`} />
                </div>
              </div>

              <div className='mb-3'>
                <ItemField label={`Date from`} value={`Wed Nov 27, 2024`} />
              </div>

              <div className='mb-3'>
                <ItemField label={`Date to`} value={`Wed Nov 27, 2025`} />
              </div>

              <div className='mb-3'>
                <ItemField label={`Webiste`} value={`google.com`} isLink={true} />
              </div>


              <div className='mt-8'>
                <ItemField label={`Note`} value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel obcaecati culpa nostrum temporibus cumque? Iusto sint eaque voluptatem tempora, repellendus incidunt, libero fugiat voluptatum magni, nostrum mollitia maxime quis!`} />
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