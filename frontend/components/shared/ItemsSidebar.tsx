import React from 'react'
import ItemCard from './ItemCard';

const ItemsSidebar = () => {
  return (
    <>
      <div className='w-[240px] border border-y-0 border-l-0'>
        <div>
          <i className="pi pi-search"></i>
        </div>

        <div>
          <ItemCard />
        </div>

        <div>

        </div>
      </div>
    </>
  )
}

export default ItemsSidebar;