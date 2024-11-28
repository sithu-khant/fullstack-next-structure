"use client"

import React, { useRef, useState } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';


const CustomTieredMenu = ({ icon, model }: any) => {

  const menu: any = useRef(null);
  const [isFocus, setIsFocus] = useState(false);

  console.log(isFocus);

  return (
    <>
      <TieredMenu
        model={model}
        ref={menu}
        popup
        breakpoint="28px"
        onFocus={() => { setIsFocus(true) }}
        onHide={() => { setIsFocus(false) }}
      />
      <i
        className={`pi ${icon} menu-icon ${isFocus && "bg-hover-color"}`}
        style={{ fontWeight: "700" }}
        onClick={(e) => menu.current.toggle(e)}
      >
      </i >
    </>
  )
}

export default CustomTieredMenu;