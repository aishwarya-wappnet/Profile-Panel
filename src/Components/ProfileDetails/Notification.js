import React from 'react'
import { SlLocationPin } from 'react-icons/sl'

const Notification = () => {
  return (
    <div className="ml-4 flex flex-col max-lg:hidden">
        <div className="w-[260px] h-[302px] flex-col justify-center items-center bg-white rounded-lg p-4 flex">
          <div className=" text-red-600 font-extrabold text-[30px]">RE/MAX</div>
          <div className="text-[14px] text-[#555B67]">Brokerage</div>
          <div className="text-[#0F1C35] font-semibold text-[18px]">RE/MAX Hallmark</div>
          <div className="mt-6"><SlLocationPin className="w-[17.25px] h-[20px]"/></div>
          <div className="text-center text-[14px] text-[#555B67]">4517 Washington Ave. Manchester, Kentucky 39495</div>
        </div>
        <div className="w-[260px] mt-4 h-[302px] bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
          <span className="text-[18px] font-semibold">Notifications</span>
          <span className="bg-[#ebeef3] rounded-lg w-[76px] h-[40px] p-2">View All</span>
          </div>
        </div>
    </div>
  )
}

export default Notification