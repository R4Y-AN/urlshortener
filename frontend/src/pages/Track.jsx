import React,{useState} from 'react'
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
const Track = () => {
  const navigate = useNavigate();
  const [url, seturl] = useState("");
  const handleTrack=()=>{
    navigate("/total-click-count/"+url.substring(15));
  }
  return (
    <div className='w-[90%] h-full md:w-[700px] bg-[white] rounded shadow m-auto mt-[20px] flex flex-col items-center'>
    <h1 className='px-2 text-[20px] sm:text-[20px] md:text-[25px] font-semibold mt-[30px] mb-[30px]'>Enter the URL to track how many clicks it received.</h1>
    <div className='flex flex-row items-center w-full justify-center mb-[15px]'><input type="text" className='outline-none w-[50%] border h-[40px] focus:border-[#D3FFF3] px-2 text-[#292E1E]' onChange={(e)=>{seturl(e.target.value)}}/><button className='h-[40px] bg-[#9649CB] px-3 text-white font-semibold rounded-e-sm' onClick={handleTrack}>Track URL</button></div>
    <p className='text-[15px] text-[#541B5C] text-start mb-[20px]'>Example: shorturl.at/AbCdE</p>
  </div>
  )
}

export default Track