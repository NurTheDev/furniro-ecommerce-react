import React from 'react';

function CartBtn({btnText, btnIcon, className}) {
    return (
        <button className={`bg-transparent font-semibold lg:text-xl flex items-center justify-center gap-x-2 rounded-2xl py-4 px-4 border max-w-[215px] w-full cursor-pointer hover:bg-green-accent hover:text-white ${className}`}>
         <span>{btnIcon}</span>   {btnText}
        </button>
    );
}

export default CartBtn;