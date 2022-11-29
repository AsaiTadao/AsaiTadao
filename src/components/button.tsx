import React, { useState } from 'react'
interface buttonProps{
    onClick:()=>void;
    text:string;
    disabled?:boolean;
    width?:number;
}
function Button(props:buttonProps){
    return (
        <button
            className={`inline-block rounded border bg-btnBgColor dark:bg-darkBtnBgColor py-2 text-sm font-medium text-btnTextColor dark:text-darkBtnTextColor disabled:opacity-75 w-[${props.width?props.width:'200px'}]`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
        {props.text}
      </button>
    );
}

export default Button;