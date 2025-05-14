import React from 'react';

function SecondaryButton({btnText, classname}) {
    return (
        <button className={`w-[202px] py-3 bg-primary text-white font-semibold text-center hover:border-2 hover:border-primary hover:bg-white hover:text-primary transition duration-200 cursor-pointer ${classname}`}>
            {btnText}
        </button>
    );
}

export default SecondaryButton;