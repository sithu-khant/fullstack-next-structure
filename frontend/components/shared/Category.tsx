import { TieredMenu } from 'primereact/tieredmenu';
import React, { useRef, useState } from 'react'

const Category = () => {

  const menu: any = useRef(null);
  const [isEllipsisClicked, setIsEllipsisClicked] = useState(false);


  const handleEllipsisClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEllipsisClicked(!isEllipsisClicked);
    menu.current.toggle(e)
  }

  const items = [
    {
      label: 'Favorite',
      icon: 'pi pi-star',
      command: () => {
        console.log("Hello");
      }
    },
    {
      label: 'Rename',
      icon: 'pi pi-pencil',
      command: () => {
        console.log("Hello");
      }
    },
    {
      label: 'Table View',
      icon: 'pi pi-table',
      command: () => {
        console.log("Hello");
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        console.log("Hello");
      }
    }
  ];


  return (
    <>
      <div className='group flex items-center justify-between text-slate-700 hover:text-slate-800 hover:bg-slate-50 cursor-pointer m-1 p-1 rounded'>

        <div className='flex items-center'>
          <p className='px-1 pr-2'>🏠</p>
          <p className='text-sm'>Personal This is a long text</p>
        </div>

        <div className={`opacity-0 group-hover:opacity-100 ${isEllipsisClicked ? "opacity-100" : "opacity-0"}`}>
          <TieredMenu model={items} popup ref={menu} breakpoint="28px" />
          <i
            className="pi pi-ellipsis-v p-1 text-sm text-slate-600 hover:text-text-color cursor-pointer"
            onClick={handleEllipsisClick}
          >
          </i>
        </div>

      </div>
    </>
  )
}

export default Category;