import React from 'react'
import heroVid from "../assets/video.mp4"
export default function Hero() {
  return (
    <div className='w-full h-[90vh] '>
            <video className='object-cover h-full w-full -z-10  absolute' loop autoPlay muted src={heroVid}></video>
        <div className='w-full text-white h-[90%] flex justify-center items-center flex-col'>
            <h1 className='text-white text-4xl font-bold'>Decentralized</h1>
            <h1 className='py-2 text-4xl md:text-5xl'><span className='text-blue-400 font-bold'>Trading</span> Protocol</h1>
            <p className='text-xl   py-4'>Guaranteed liquidity trading for millions of users and top Etherum applications.</p>
            <div>
            <button className='m-2'>
                Use Defi
            </button>
            <button className='m-2'>
                FAQ
            </button>
            </div>
        </div>
        <div>
            <p className='text-white text-2xl text-center font-bold'>Total Volume Secured: $42,104,785,664,56</p>
        </div>
    </div>
  )
}
