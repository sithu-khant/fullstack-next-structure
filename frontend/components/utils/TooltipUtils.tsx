import React from 'react';
import { Tooltip } from "primereact/tooltip";

interface Props {
  target: string,
  content: string
}

const TooltipUtils = ({ target, content }: Props) => {
  return (
    <>
      {/* <Tooltip target={target} showDelay={1000} hideDelay={300} content={content} /> */}
      <Tooltip target={target} content={content} />
    </>
  )
}

export default TooltipUtils;