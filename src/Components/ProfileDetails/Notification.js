import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { BsCalendar4Week } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs';
import { button } from '../../Styles/stylesConstants';

const Notification = () => {
  return (
    <div className="ml-4 flex flex-col max-lg:w-full">
        <div className="w-[260px] h-[302px] flex-col justify-center items-center bg-white rounded-lg p-4 flex">
          <div className=" text-red-600 font-extrabold text-[30px]">RE/MAX</div>
          <div className="text-[14px] text-[#555B67]">Brokerage</div>
          <div className="text-[#0F1C35] font-semibold text-[18px]">RE/MAX Hallmark</div>
          <div className="mt-6"><SlLocationPin className="w-[17.25px] h-[20px]"/></div>
          <div className="text-center text-[14px] text-[#555B67]">4517 Washington Ave. Manchester, Kentucky 39495</div>
        </div>
        <div className="notifications flex flex-col w-[260px] mt-4 h-[550px] bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
          <span className="text-[18px] font-semibold">Notifications</span>
          <span className="bg-[#ebeef3] rounded-lg w-[76px] h-[40px] p-2">View All</span>
          </div>
          <div className="input mt-4 border-2 border-[#555B67/15%] rounded-lg p-3">
            <div className="flex justify-between">
            <input type="text" disabled placeholder='Select Agent' className='w-[84px] text-[14px]'/>
            <select name="" id="" className="outline-none">
              <option value="">Jenny Wilson</option>
              <option value="">Jenny Wilson</option>
              <option value="">Jenny Wilson</option>
              <option value="">Jenny Wilson</option>
              <option value="">Jenny Wilson</option>
            </select>
            </div>
          </div>
          <div className="today mt-4 flex items-center justify-center">
             <span className="text-[12px]">Today</span>
             <span className="w-[206px] bg-[#d4d5d8] h-[1px] ml-2"></span>
          </div>
          <div className="upcoming-showing flex flex-col py-4 rounded-lg p-4 shadow-xl">
            <span className="flex items-center justify-start">
              <span className="bg-[#2E63F6] rounded-full w-4 h-4"></span>
              <span className="ml-3 text-[#2E63F6] text-[14px] font-bold">Upcoming Showing</span>
            </span>
            <span className="flex items-center justify-start mt-2">
              <span><SlLocationPin className="w-[17.25px] h-[20px]"/></span>
              <span className="ml-3 text-[#555B67] text-[12px] font-bold">1901 Thornridge Cir. Shiloh, Hawaii..</span>
            </span>
            <span className="flex">
              <span className="flex flex-row text-[#555B67] text-[12px]">
                <span><BsCalendar4Week className="w-[17.25px] h-[20px]"/></span>
                <span className="ml-2">Jun 10, 22</span>
              </span>
              <span className="flex flex-row ml-2 text-[#555B67] text-[12px]">
                <span><AiOutlineClockCircle className="w-[17.25px] h-[20px]"/></span>
                <span className="ml-2">9:30-11:00</span>
              </span>
            </span>
            <span className="flex mt-4 justify-between">
              <span className="flex">
                <span><img src="../../assets/person.webp" className="w-6 h-6 rounded-3xl" alt="" /></span>
                <span className="ml-2">Berkay's Tour</span>
              </span>
              <span className="flex items-center">
                <span ><img src="../../assets/person.webp" className="border-2 border-white ml-2 w-6 h-6 rounded-full" alt="" /></span>
                <span className="absolute"><img src="../../assets/person.webp" className="relative border-2 border-white ml-4 w-6 h-6 rounded-full" alt="" /></span>
                <span className="-ml-2"><img src="../../assets/person.webp" className="relative border-2 border-white w-6 h-6 rounded-full" alt="" /></span>
                <span className="text-[12px] ml-1">+8</span>
              </span>
            </span>
          </div>
          <div className="completedShowing border-2 p-4 flex flex-col mt-4 rounded-lg">
            <span className="text-[14px] font-semibold flex items-center"><BsCheckCircle /><span className="ml-2">Completed showing</span></span>
            <span className="text-[14px] text-[#555B67]">Berkay's Tour is complete!</span>
          </div>
          <div className="Yesterday mt-4 flex items-center justify-center">
             <span className="text-[12px]">Yesterday</span>
             <span className="w-[206px] bg-[#d4d5d8] h-[1px] ml-2"></span>
          </div>
          <div className="mt-8">
            <div className={`${button.quaternary}`}>Mark as Read</div>
          </div>
        </div>
    </div>
  )
}

export default Notification