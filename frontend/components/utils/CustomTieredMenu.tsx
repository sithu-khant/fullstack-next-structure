"use client"

import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';


const CustomTieredMenu = ({ icon, model }: any) => {

  const menu: any = useRef(null);

  return (
    <>
      <TieredMenu model={model} popup ref={menu} breakpoint="28px" />
      <i
        className={`pi ${icon} menu-icon`}
        style={{ fontWeight: "700" }}
        onClick={(e) => menu.current.toggle(e)}
      >
      </i >
    </>
  )
}

export default CustomTieredMenu;