import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { CameraIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

import { UsersIcon } from "@heroicons/react/24/outline";

import { PhoneIcon } from "@heroicons/react/24/outline";

import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";




interface Chat {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

interface ChatResponse {
  chats: Chat[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

export const ChatRecord: React.FC<ChatResponse> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };


  return (
    <>
      <div className='w-100 lg:mx-32 h-auto '>
        
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-gray-200/20">
          
          <nav className='w-100  block p-2 border-b-2 border-gray-200'>
          <div className='flex justify-between items-center my-1'>
              <div className='flex items-center '>
                      <ArrowLeftIcon className="h-5 w-5 text-black mx-2" />
                      <h1 className="font-bold text-xl">{props.name}</h1>
              </div>
            <div className='block mr-2'>
              <button>
              <PencilSquareIcon className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center '>
              <div className='flex px-2 items-center'>
                    <div className='p-2'>
                      <img src='https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg' className='w-12 h-12 rounded-full' />
                    </div>
                    <div className='block p-2'>
                      <p className='text-gray-600'>From <span className='text-black font-bold text-lg px-1'> {props.from} </span></p>
                      <p className='text-gray-600'>To <span className='text-black font-bold text-lg px-1'>{props.to}</span></p>
                    </div>
              </div>
            
            <div className='block mr-2'>
                <button onClick={toggleMenu}>
                      <EllipsisVerticalIcon className="h-8 w-8 text-black " />              
              </button>
              </div>
                {isMenuOpen && (
                        <div className="absolute top-28 right-8 z-50 flex flex-col space-y-2 bg-white border rounded-lg shadow mb-3">
                          <button className="flex items-center p-2 hover:bg-gray-100">
                          <UsersIcon className="h-6 w-6 text-black" />
                            <span className="ml-2">Members</span>
                          </button>

                          <button className="flex items-center p-2 hover:bg-gray-100">
                          <PhoneIcon className="h-6 w-6 text-black" />
                            <span className="ml-2">Share Number</span>
                          </button>

                          <button className="flex items-center p-2 hover:bg-gray-100">
                            <ArchiveBoxXMarkIcon className="h-6 w-6 text-black" />
                            <span className="ml-2">Report</span>
                          </button>
                        </div>
                      )}
          </div>
          
        </nav>
          <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {props.chats.map((chat) => (
                  <>
                    <div className="chat-message">
                      <div key={chat.id} className="flex justify-start">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div><span className="px-4 text-md py-2 rounded-xl inline-block rounded-bl-none shadow-md text-gray-600">{chat.message }</span></div>
                        </div>
                        <img src={chat.sender.image} alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                    
                      </div>
                    </div>
                    <div className="chat-message">
                    <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div><span className="px-4 py-2 rounded-xl inline-block rounded-br-none shadow-md bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
                        </div>
                        <img src={chat.sender.image} alt="My profile" className="w-6 h-6 rounded-full order-2"/>
                    </div>
                  </div>
                  </>
                  ))}
              
              
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
              <div className="relative flex">
                
                <input type="text" placeholder="Reply @Rohit Yadav" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"/>
                <div className="absolute right-0 items-center inset-y-0 sm:flex">
                    <button type="button" onClick={toggleTooltip} className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-black">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                      </svg>
                    </button>
                      {isTooltipOpen && (
                        <div className="absolute bottom-10 right-0 z-50 flex flex-row space-y-2 bg-[#0a5c01] rounded-full shadow mb-3">
                        <div className="flex items-center p-2">
                          <button className="p-2 ">
                              <CameraIcon className="h-5 w-5 text-white" />
                              
                            </button>

                            <button className=" p-2 ">
                              <VideoCameraIcon className="h-5 w-5 text-white" />
                              
                            </button>

                            <button className=" p-2 ">
                              <DocumentArrowDownIcon className="h-5 w-5 text-white" />
                              
                            </button>
                      
                        </div>
                    
                        </div>
                      )}
                    <button type="button" className="inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-white focus:outline-none">
                      <PaperAirplaneIcon className="h-5 w-5 text-black" /> 
                </button>
                
                </div>
              </div>
          </div>
        </div>
     </div>
      



{/* <script>
	const el = document.getElementById('messages')
	el.scrollTop = el.scrollHeight
</script> */}
    </>
  );
};

const ChatComponent: React.FC = () => {
  
  const [chatData, setChatData] = useState<ChatResponse | null>(null);
  


  useEffect(() => {
    axios.get('https://qa.corider.in/assignment/chat?page=0')
      .then((response) => {
        setChatData(response.data);
          console.log(response.data.name);
        // setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='w-100'>
        
       
        
        {chatData ? <ChatRecord {...chatData} /> : <p>Loading...</p>}
        
      </div>
    
    </>
  );
};

export default ChatComponent;
