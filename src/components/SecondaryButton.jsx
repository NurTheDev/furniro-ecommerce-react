import React from 'react';

function SecondaryButton({btnText, classname}) {
    return (
        <button className={`max-w-[202px] py-3 bg-white text-primary font-semibold text-center border-2 border-primary hover:bg-primary hover:text-white transition duration-200 cursor-pointer ${classname}`}>
            {btnText}
        </button>
    );
}

export default SecondaryButton;