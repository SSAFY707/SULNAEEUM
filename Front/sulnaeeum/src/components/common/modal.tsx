import { useState } from 'react';

export const Modal = (props:{open: boolean, w: string, h: string, modalOpen, children}) => {
    const {open, modalOpen, children, w, h} = props

  return (
    <>
      <div className={'flex justify-center items-center'}>
        {open ? 
        <div className={'z-[60] fixed flex justify-center items-center bg-black/30 top-0 bottom-0 left-0 right-0'} onClick={modalOpen}>
            <div className={`flex flex-col items-center rounded-[10px] bg-white`} style={{height: `${h}`, width: `${w}`}} onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
          : null
        }
      </div>
    </>
  );
};