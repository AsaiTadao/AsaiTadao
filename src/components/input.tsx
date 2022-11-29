import React, { useState } from 'react'
interface inputProps{
    onChange:(val:string)=>void;
    value:string;
}
function Input(props:inputProps){
    return (
        <input
            placeholder="please enter message"
            className="border-2 border-blue-500 h-[38px] rounded-md sm:text-sm outline-none text-darkBtnTextColor placeholder-gray-500"
            onChange={(e)=>{props.onChange(e.target.value);}}
            value={props.value}
        />
    );
}

export default Input;