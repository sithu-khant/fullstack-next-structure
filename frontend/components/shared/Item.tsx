"use client"

import React, { useRef } from 'react';
import { Knob } from 'primereact/knob';

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
              <p className='text-xl font-semibold mt-1 mb-6'>🏠 Netflix</p>
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

              {/* provider */}
              <div className='mb-3'>
                <ItemField label={`Provider`} value={`Netflix`} />
              </div>

              {/* Type */}
              <div className='mb-3'>
                <ItemField label={`Type`} value={`Streaming`} />
              </div>

              {/* billingCycle */}
              <div className='mb-3'>
                <ItemField label={`Billing Cycle`} value={`Monthly`} />
              </div>

              {/* paymentMethod */}
              <div className='mb-3'>
                <ItemField label={`Payment Method`} value={`Credit Card`} />
              </div>

              {/* dateFrom */}
              <div className='mb-3'>
                <ItemField label={`Date from`} value={`Wed Nov 27, 2024`} />
              </div>

              {/* dateTo */}
              <div className='mb-3'>
                <ItemField label={`Date to`} value={`Wed Nov 27, 2024`} />
              </div>

              {/* autoRenew */}
              <div className='mb-3'>
                <ItemField label={`Auto Renew`} value={`Yes`} />
              </div>

              {/* plan */}
              <div className='mb-3'>
                <ItemField label={`Plan`} value={`Standard`} />
              </div>

              {/* cost */}
              <div className='mb-3'>
                <ItemField label={`Cost`} value={`15.99`} />
              </div>

              {/* currency */}
              <div className='mb-3'>
                <ItemField label={`Currency`} value={`USD`} />
              </div>

              {/* website */}
              <div className='mb-3'>
                <ItemField label={`Webiste`} value={`google.com`} isLink={true} />
              </div>


              {/* notes */}
              <div className='mt-8'>
                <ItemField label={`Notes`} value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel obcaecati culpa nostrum temporibus cumque? Iusto sint eaque voluptatem tempora, repellendus incidunt, libero fugiat voluptatum magni, nostrum mollitia maxime quis!`} />
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