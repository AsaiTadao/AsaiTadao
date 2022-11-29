import React, { useState } from 'react'
import { setTheme } from "@store/slices/root.slice";
import {addLog} from '@store/slices/log.slice';
import {  useAppDispatch,useAppSelector } from '@store/hooks'
import Input from '@components/input';
import Button from '@/components/button';
function Home() {
  const dispatch = useAppDispatch();
  const theme=useAppSelector((state)=>state.root.theme);
  const array=useAppSelector((state)=>state.log.logs);
  const [input,setInput]=useState('');
  const [isActive,setActive]=useState(true);
  const [buttonNumber,setButtonNumber]=useState(1);
  const changeTheme=()=>{
    dispatch(setTheme());
    dispatch(addLog(`Theme was set to ${theme?'Light':'Dark'}`));
  };
  const addButton=()=>{
    dispatch(addLog(`Button ${buttonNumber} added`));
    setButtonNumber(buttonNumber+1);
  };
  const sendMessage=()=>{
    dispatch(addLog(`Message Send:${input}`));
    setInput('');
    setActive(true);
  };
  const clickButton=(val:number)=>{
    dispatch(addLog(`Button ${val} Clicked`));
    setInput('');
    setActive(true);
  };
  const inputChange=(val:string)=>{
    console.log(val);
    if(val==''){
      setActive(true);
    }else{
      setActive(false);
    }
    setInput(val);
  }
  return (
    <div className={`flex flex-row min-h-screen mx-auto max-w-[2000px] ${theme && 'dark'}`}>
      <div className='basis-1/2 bg-lftBgColor dark:bg-darkLftBgColor'>
        <Button onClick={changeTheme} text={`Set ${theme?'Light':'Dark'} Theme`} />
        <div className='flex flex-row items-center'>
          <Input onChange={(val)=>{inputChange(val)}} value={input} />
          <Button onClick={sendMessage} text={`Send Message`} disabled={isActive}/>
        </div>
         <Button onClick={addButton} text={`Add Buttion ${buttonNumber}`} />
         <br/>
         {
              new Array(buttonNumber-1).fill(0).map((_,index) =>
              <Button onClick={()=>{clickButton(index+1)}} text={`Button ${index+1}`} />
            )
          }
      </div>
      <div className='basis-1/2 bg-rgtBgColor dark:bg-darkRgtBgColor pt-[10px] pl-[10px]'>
      {
        array && array.map((v,index) =>
          <p key={index} className="text-rgtTxtColor dark:text-darkRgtTxtColor text-[16px] font-bold py-[2px]">
            {`${v}`}
          </p>
        )
      }
      </div>
    </div>
  )
}
export default Home