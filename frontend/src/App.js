import React from 'react';
import {Routes,Route,useParams} from 'react-router-dom';
import Home from './pages/Home';
import ClickCountViewer from './pages/ClickCountViewer';
import LoadUrl from './pages/LoadUrl'
import {Toaster} from 'react-hot-toast'; 
import Track from './pages/Track';

function App() {
  const {shortId} = useParams();
  return (
    <div>
       <div className='w-full h-screen z-[-1000] bg-[#F9F9F9] absolute top-0 left-0'></div> 
       <Toaster/>
       {!shortId&&<header className='w-full text-center mt-[20px]'>
          <h1 className='text-[30px] sm:text-[40px] md:text-[60px] font-bold text-[#9649cb]'>URL SHORTENER</h1>
       </header>}
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/track' element={<Track></Track>}></Route>
         <Route path='/total-click-count/:shortId' element={<ClickCountViewer></ClickCountViewer>}></Route>
         <Route path='/:shortId' element={<LoadUrl></LoadUrl>}></Route>
      </Routes>
    </div>
  );
}

export default App;
