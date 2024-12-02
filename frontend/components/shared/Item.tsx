"use client"

import React, { useRef } from 'react';
import { Knob } from 'primereact/knob';

import ItemField from './ItemField';

const Item = () => {

  const itemMenu: any = useRef(null);

  const handleFavorite = () => { };
  const handleDelete = () => { };


  return (
    <>
      <div className='w-full h-screen overflow-y-scroll scrollbar-thin'>
        <div className='w-full px-10 mx-auto'>
          <div className=' md:m-auto p-3'>

            <div className='sticky top-0 bg-white flex items-center justify-between '>
              <div>
                <p className='text-xl font-semibold my-5 mb-7'>🏠 Netflix</p>
              </div>

              <div className='flex items-center'>
                <div className='item-menu-button'>
                  <i className="pi pi-star mr-2 text-sm" style={{ fontWeight: "900" }}></i>
                  <p className=''>Favorite</p>
                </div>

                <div className='item-menu-button'>
                  <i className="pi pi-pencil mr-2 text-xs" style={{ fontWeight: "900" }}></i>
                  <p className=''>Edit</p>
                </div>

                <div className='item-menu-button'>
                  <i className="pi pi-trash mr-2 text-xs" style={{ fontWeight: "900" }}></i>
                  <p className=''>Delete</p>
                </div>
              </div>
            </div>

            <div className='m-auto'>

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


                <div className='item-main-container'>
                  {/* autoRenew */}
                  <div className='item-container'>
                    <ItemField label={`Auto Renew`} value={`Yes`} />
                  </div>

                  {/* billingCycle */}
                  <div className='item-container'>
                    <ItemField label={`Billing Cycle`} value={`Monthly`} />
                  </div>
                </div>

                <div className='item-main-container'>
                  {/* provider */}
                  <div className='item-container'>
                    <ItemField label={`Provider`} value={`Netflix`} />
                  </div>

                  {/* type */}
                  <div className='item-container'>
                    <ItemField label={`Type`} value={`Streaming`} />
                  </div>
                </div>

                <div className='item-main-container'>
                  {/* dateFrom */}
                  <div className='item-container'>
                    <ItemField label={`Date from`} value={`Wed Nov 27, 2024`} />
                  </div>

                  {/* dateTo */}
                  <div className='item-container'>
                    <ItemField label={`Date to`} value={`Wed Nov 27, 2024`} />
                  </div>
                </div>

                <div className='item-main-container'>
                  {/* plan */}
                  <div className='item-container'>
                    <ItemField label={`Plan`} value={`Standard`} />
                  </div>

                  {/* paymentMethod */}
                  <div className='item-container'>
                    <ItemField label={`Payment Method`} value={`Credit Card`} />
                  </div>
                </div>


                <div className='item-main-container'>
                  {/* cost */}
                  <div className='item-container'>
                    <ItemField label={`Cost`} value={`15.99`} />
                  </div>

                  {/* currency */}
                  <div className='item-container'>
                    <ItemField label={`Currency`} value={`USD`} />
                  </div>
                </div>

                {/* website */}
                <div className='mb-3'>
                  <ItemField label={`Webiste`} value={`google.com`} isLink={true} />
                </div>


                {/* notes */}
                <div className='mt-8'>
                  <ItemField label={`Notes`} value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel obcaecati culpa nostrum temporibus cumque? Iusto sint eaque voluptatem tempora, repellendus incidunt, libero fugiat voluptatum magni, nostrum mollitia maxime quis!`} />
                </div>

                <div className='my-8 flex items-center'>
                  <i className='pi pi-history mr-1 text-xs text-slate-600' style={{ fontWeight: "800" }}></i>
                  <p className='item-value'>Last edited: Wed Nov 27, 2024</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item;