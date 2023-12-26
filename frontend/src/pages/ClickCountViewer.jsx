import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../API';

const api = new API();

const ClickCountViewer = () => {
  const navigate = useNavigate();
  const { shortId } = useParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.loadClick(shortId);
        console.log(res);
        if (res.status === 200) {
          setCount(res.data.clickCount);
        }
      } catch (error) {
        // Handle error here
        console.error(error);
      }
    };

    fetchData(); // Call the async function
  }, [shortId]);

  return (
    <div className='w-full flex items-center justify-center mt-[30px]'>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-[30px] font-bold text-[#555555]'>Total URL Clicks</h1>
        <h1>The number of clicks from the shortened URL that redirected the user to the destination page.</h1>
        <h1 className='px-3 py-3 bg-white underline mt-4 text-[#9649CB] font-semibold'>
          localhost:3000/{shortId}
        </h1>
        <h1 className='px-4 py-3 bg-white font-bold mt-1 mb-4'>{count}</h1>
        <button
          className='px-2 py-2 bg-[#9649CB] rounded-sm text-[12px] text-[white] font-bold mb-2'
          onClick={() => {
            navigate('/track');
          }}
        >
          Track clicks of another short URL
        </button>
        <button
          className='px-2 py-2 bg-[#9649CB] rounded-sm text-[12px] text-[white] font-bold'
          onClick={() => {
            navigate('/');
          }}
        >
          Short another URL
        </button>
      </div>
    </div>
  );
};

export default ClickCountViewer;
