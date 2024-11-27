import { categoryCardItems } from '@/constants';
import { TieredMenu } from 'primereact/tieredmenu';
import React, { useRef, useState } from 'react'
import CategoryInputField from '../forms/CategoryInputField';

const Category = () => {

  const categoryCardMenu: any = useRef(null);
  const [isEllipsisClicked, setIsEllipsisClicked] = useState(false);
  const [toggleInputField, setToggleInputField] = useState(false);

  const handleEllipsisClick = (e: React.MouseEvent) => {
    setIsEllipsisClicked(!isEllipsisClicked);
    categoryCardMenu.current.toggle(e)
  }

  const handleFavorite = () => {
  };

  const handleRename = () => {
    setToggleInputField(!toggleInputField);
  };

  const handleTableView = () => { };
  const handleDelete = () => { };

  return (
    <>
      {toggleInputField ? (
        <div>
          <CategoryInputField toggleInputField={toggleInputField} setToggleInputField={setToggleInputField} />
        </div>
      ) : (
        <div className='group flex items-center justify-between text-slate-700 hover:text-slate-800 hover:bg-slate-50 cursor-pointer p-1 rounded'>

          <div className='flex items-center'>
            <p className='px-1 pr-2'>🏠</p >
            <p className='text-sm'>Personal</p>
          </div >

          <div className={`opacity-0 group-hover:opacity-100 ${isEllipsisClicked && "opacity-100"}`}>
            <TieredMenu model={categoryCardItems({ handleFavorite, handleRename, handleTableView, handleDelete })} popup ref={categoryCardMenu} breakpoint="28px" onHide={() => setIsEllipsisClicked(!isEllipsisClicked)} />
            <i
              className="pi pi-ellipsis-v p-1 text-sm text-slate-600 hover:text-text-color cursor-pointer"
              onClick={handleEllipsisClick}
            >
            </i>
          </div>

        </div >
      )}
    </>
  )
}

export default Category;