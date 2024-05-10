import React from 'react'
import hyggex from '../components/hyggex.png'
import flashcard from '../components/flashcard.png'

const Logo = () => {
  return (
    <>
        <div className='flex items-center justify-between w-[Hug (217px)] h-[Hug (80.6px)] top-[955px] left-[106px] gap-[21.26px] opacity-[0px] mt-6'>  
        <img src={hyggex} className='w-[200px] h-[100px] ml-16'></img>
        <img src={flashcard} className='w-[270px] h-[50px] mr-[230px]'></img>
    </div> 
    </>
  )
}

export default Logo