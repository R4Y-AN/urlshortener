import React from 'react'
import validator from 'validator';
import API from '../API';
import { useState } from 'react';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const DOMAIN = "localhost:3000/";

const api = new API();

const CreateView = () => {
  const [url, seturl] = useState("");
  const [created,setCreated] = useState(false);
  const [shortId,setShortId] = useState("");
  const navigate = useNavigate();

  const handleCreate=async()=>{
    if(validator.isURL(url)){
      try{
        const res = await api.createUrl(url);
        if(res.status==201){
          toast.success("Url Shorten Successfully");
          setShortId(res.data.url.shortUrl);
          setCreated(true);
        }else{
          toast.error("Invalid URL");
        }
      }catch{
        toast.error("Invalid URL");
      }
    }else{
      toast.error("Invalid URL");
    }
  }
  
  const handleCount=()=>{
    if(created){
      navigate('/total-click-count/'+shortId);
    }
  }

  const handleCopy=()=>{
    if (created) {
      navigator.clipboard.writeText(DOMAIN+shortId);
      toast.success("URL copied to clipboard");
    }
  }
  
  return (
    <div className='w-[90%] h-full md:w-[700px] bg-[white] rounded shadow m-auto mt-[20px] flex flex-col items-center'>
      <h1 className='text-[20px] sm:text-[25px] md:text-[35px] font-semibold mt-[30px] mb-[30px]'>Enter the URL to be shortened</h1>
      <div className='flex flex-row items-center w-full justify-center mb-[15px]'><input type="text" className='outline-none w-[50%] border h-[40px] focus:border-[#D3FFF3] px-2 text-[#292E1E]' onChange={(e)=>{seturl(e.target.value)}}/><button className='h-[40px] bg-[#9649CB] px-3 text-white font-semibold rounded-e-sm' onClick={handleCreate}>Shorten URL</button></div>
      <p className='text-[15px] text-[#541B5C] px-3'>URL shortener allows to create a shortened link making it easy to share</p>
      <div className=' w-full flex flex-row justify-center items-center  mt-[20px] mb-[40px] flex-wrap'>
        <p className={'underline border px-3 py-1 '+(!created&&'text-[#9c9c99]')}>{created?DOMAIN+shortId:DOMAIN}</p>
        {created&&<div className='flex flex-row mt-2 sm:mt-0'>
          <button onClick={handleCopy} className='ml-2 px-2 py-2 bg-[#9649CB] rounded-sm text-[12px] text-[white] font-bold'>Copy URL</button>
          <button onClick={handleCount} className='ml-2 px-2 py-2 bg-[#9649CB] rounded-sm text-[12px] text-[white] font-bold'>Click Count</button>
        </div>}
        {!created&&<div className='flex flex-row mt-2 sm:mt-0'>
          <button className='ml-2 px-2 py-2 bg-[#532770] cursor-not-allowed rounded-sm text-[12px] text-[#9c9c99] font-bold'>Copy URL</button>
          <button className='ml-2 px-2 py-2 bg-[#532770] cursor-not-allowed rounded-sm text-[12px] text-[#9c9c99] font-bold'>Click Count</button>
        </div>}
      </div>
    </div>
  )
}

export default CreateView