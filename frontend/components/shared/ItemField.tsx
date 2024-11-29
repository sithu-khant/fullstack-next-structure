import React from 'react'

const ItemField = ({ label, value, isLink = false }: any) => {
  return (
    <>
      {isLink ? (
        <div>
          <p className='item-label'>{label}</p>

          <a href={`https://${value}`} target='_blank' className='item-value text-slate-500'>
            https://
            <span className='text-primary-color'>{value}</span>
          </a>
        </div>
      ) : (
        <div>
          <p className='item-label'>{label}</p>
          <p className='item-value'>{value}</p>
        </div>
      )}
    </>
  )
}

export default ItemField;