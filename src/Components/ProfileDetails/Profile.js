import React from 'react'
import  { CiFacebook, CiLinkedin } from 'react-icons/ci'
import {  TfiTwitter } from 'react-icons/tfi'
import { RxInstagramLogo } from 'react-icons/rx'
import { ImCalendar } from 'react-icons/im'
import Button from '../Button'
import { BsPersonCircle } from 'react-icons/bs'
import { MdOutlineHeadsetMic } from 'react-icons/md'

const Profile = () => {
  return (
    <>
    <div className="ml-4 flex flex-col mb-8  lg:block max-lg:w-full">
        <img src="../../assets/person.webp" className="w-[120px] border-2 border-white mx-6 h-[120px] rounded-full absolute z-10" alt="person"/>
        <div className="w-[606px] max-lg:w-full h-[150px] bg-white rounded-lg mt-[60px] relative py-[70px] px-6 flex flex-col">
          <span className="text-[24px] font-bold">Berkay Erdinac</span>
          <span class="flex items-center">
            <span>hi@berkayerdinac.com</span>
            <span className="ml-2 w-1 h-1 rounded-lg bg-[#555B67]"></span>
            <span className="ml-2"><CiFacebook/></span>
            <span className="ml-2"><TfiTwitter/></span>
            <span className="ml-2"><RxInstagramLogo/></span>
            <span className="ml-2"><CiLinkedin/></span>
          </span>
       </div>
       <div className="flex flex-row mt-4 max-lg:flex-col">
        <div className="flex flex-col">
        <div className="currentPlansDetails w-[260px] h-[355px] bg-white rounded-lg px-4 flex flex-col">
          <span className="text-[18px] py-4 font-semibold">Current Plan Details</span>
          <div className="plan border-[#d2d8e4] p-4 border-2 rounded-lg">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-[16px]">Enterprise Plan</span>
                <span className="text-[14px] text-[#555B67]">Perfect plan for teams</span>
              </div>
              <div className="w-[67px] h-[40px] bg-[#ebeef3] rounded-lg p-2 text-[14px] text-[#5EB182]">Active</div>
            </div>
          </div>
          <div className="price mt-4">
            <span><span className="font-bold text-[32px]">$149 </span><span className="text-[#555B67] text-[16px]">/month</span></span>
          </div>
          <div className="divider flex">
            <span className="w-[81px] h-[8px] bg-[#2E63F6] rounded-[100px]"></span>
            <span className="w-[43px] ml-1 h-[8px] bg-[#5EB182] rounded-[100px]"></span>
            <span className="w-[95px] ml-1 h-[8px] bg-[#0F1C35] rounded-[100px]"></span>
            <span className="w-[59px] ml-1 h-[8px] bg-[#555B67] rounded-[100px]"></span>
          </div>
          <div className="license mt-[10px]">
            <div className='flex flex-row items-center'><span className=" w-[6px] h-[6px] rounded-lg bg-[#2E63F6]"></span><span className="ml-2 text-[16px] text-[#0F1C35] font-bold">44 </span><span className="ml-2 first-letter:text-[12px] text-[#555B67]">Active Agent License</span></div>
            <div className='flex flex-row items-center'><span className=" w-[6px] h-[6px] rounded-lg bg-[#FF9910]"></span><span className="ml-2 text-[16px] text-[#0F1C35] font-bold">8 </span><span className="ml-2 first-letter:text-[12px] text-[#555B67]">Active Agent License</span></div>
            <div className='flex flex-row items-center'><span className=" w-[6px] h-[6px] rounded-lg bg-[#0F1C35]"></span><span className="ml-2 text-[16px] text-[#0F1C35] font-bold">0 </span><span className="ml-2 first-letter:text-[12px] text-[#555B67]">Active Agent License</span></div>
            <div className='flex flex-row items-center'><span className=" w-[6px] h-[6px] rounded-lg bg-[#555B67]"></span><span className="ml-2 text-[16px] text-[#0F1C35] font-bold">0 </span><span className="ml-2 first-letter:text-[12px] text-[#555B67]">Active Agent License</span></div>
          </div>
        </div>
        <div className="nextPayment w-[260px] h-[255px] mt-4 p-4 bg-white rounded-lg flex flex-col">
        <span className="text-[18px] font-semibold">Next Payment</span>
        <div className="date bg-[#F5F6FA] w-[230px] rounded-lg p-[20px] mt-6 h-[88px] flex">
          <span className="calender w-[48px] h-[48px] p-[15px]"><ImCalendar/></span>
          <span className="flex flex-col">
            <span className="text-[14px] text-[#555B67]">Due Date</span>
            <span class="text-[16px] font-semibold">on Jun 28, 2022</span>
          </span>
        </div>
        <div className="mt-9"><Button content="Manage Payment Settings" width="230px"/></div>
        </div>
        </div>
        <div className="agentORassistant w-[330px] h-[626px] ml-4 bg-white rounded-lg p-4 max-lg:mt-4 max-lg:ml-0">
          <div className="flex flex-col text-left">
            <div class="text-[18px] font-semibold">Agent or Assistant? Which license do you need?</div>
            <div className="text[14px] text-[#555B67]">Select the number of agent and assistance licenses you need and complete the purchase</div>
            <div className="agentLicense flex border-[1px] rounded-lg p-4 border-[#555B67] w-[298px] h-[56px] mt-4 items-center">
              <span><BsPersonCircle/></span>
              <span className="ml-2">Agent License</span>
              <span className="w-6 h-6 ml-9 bg-[#c8cdd7] text-white text-center rounded-md">-</span>
              <span className="ml-3">Add</span>
              <span className="w-6 h-6 ml-3 bg-[#2E63F6] text-white text-center rounded-md">+</span>
            </div>
            <div className="assistantLicense flex border-[1px] rounded-lg p-4 border-[#555B67] w-[298px] h-[56px] mt-2 items-center">
              <span><MdOutlineHeadsetMic/></span>
              <span className="ml-2">Assist License</span>
              <span className="w-6 h-6 ml-9 bg-[#c8cdd7] text-white text-center rounded-md">-</span>
              <span className="ml-3">Add</span>
              <span className="w-6 h-6 ml-3 bg-[#2E63F6] text-white text-center rounded-md">+</span>
            </div>
            <div className="discountCode flex border-[1px] rounded-lg p-4 border-[#555B67] w-[298px] h-[56px] mt-2 justify-between">
              <span className="ml-2">Discount Code</span>
              <span className="bg-[#2E63F6] text-white rounded-md px-1">Apply</span>
            </div>
            <div className="subtotal mt-6">
              <span className="text-[18px] font-semibold">Subtotal</span>
              <div className="mt-2">
                <div className="flex justify-between items-center"><span className="text-[#555B67] text-[16px]">Agent License Total</span><span className="text-[#0F1C35] text-[18px] font-semibold">$140</span></div>
                <div className="flex justify-between items-center"><span className="text-[#555B67] text-[16px]">Assistant License Total</span><span className="text-[#0F1C35] text-[18px] font-semibold">$140</span></div>
                <div className="flex justify-between items-center"><span className="text-[#555B67] text-[16px]">Discount</span><span className="text-[#555B67] text-[18px] font-semibold">$0.00</span></div>
                <div className="flex justify-between items-center"><span className="text-[#555B67] text-[16px]">Tax</span><span className="text-[#0F1C35] text-[18px] font-semibold">+ $9.00</span></div>
                <div className="flex justify-between items-center"><span className="text-[#0F1C35] font-semibold text-[16px]">Total</span><span className="text-[#2E63F6] text-[24px] font-semibold">$149.00</span></div>
              </div>
            </div>
            <div className="mt-4"><Button content="Pay $149" width="298px"/></div>
          </div>
        </div> 
       </div>
    </div>
    {/* FOR SMALLER SCREENS START */}
    {/* <div className="w-[460px] flex max-lg:block lg:hidden flex-wrap">
      <div className="bg-white flex p-6 rounded-lg justify-around">
      <img src="../../assets/person.webp" className="w-[120px] border-2 border-white h-[120px] rounded-lg" alt="person"/>
      <span className="flex flex-col">
          <span className="text-[32px] font-bold">Berkay Erdinac</span>
          <span>hi@berkayerdinac.com</span>
          <span class="flex items-center mt-3">
            <span className=""><CiFacebook/></span>
            <span className="ml-2"><TfiTwitter/></span>
            <span className="ml-2"><RxInstagramLogo/></span>
            <span className="ml-2"><CiLinkedin/></span>
          </span>
          </span>
      </div>
      <div className="flex flex-row mt-4">
        <div className="flex flex-col">
        <div className="w-[290px] h-[407px] bg-white rounded-lg"></div>
        <div className="w-[290px] h-[255px] mt-4 bg-white rounded-lg"></div>
        </div>
        <div className="w-[300px] h-[695px] ml-4 bg-white rounded-lg"></div>
       </div>
    </div> */}
    {/* FOR SMALLER SCREENS END */}
    </>
  )
}

export default Profile