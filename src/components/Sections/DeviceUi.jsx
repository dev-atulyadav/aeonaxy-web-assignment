import React from 'react'
import { MdNetworkCell } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa6";

const DeviceUi = ({Ui}) => {
  return (
    <div className='w-72 border border-black rounded-xl flex flex-col justify-center items-center overflow-hidden bg-white py-2 h-full'>
      <span className='w-full flex justify-between items-center px-2 text-sm'>
        <p>8:12</p>
        <div className='flex justify-center items-center gap-1'>
        <MdNetworkCell />
        <FaWifi/>
        <FaBatteryFull/>
        </div>
      </span>
        <img src={Ui} className='h-full' alt="" />
    </div>
  )
}

export default DeviceUi
