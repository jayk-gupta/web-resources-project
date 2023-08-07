import React from 'react'
import { useState } from 'react'
import SocialMediaShareBtn from './socialmedia/SocialMediaShareBtn'

const ShareModal = ({closeModal, link}) => {


    const [animateClick, setAnimateClick] = useState(false)

    function Clicked(e) {
        navigator.clipboard.writeText(link)
        setAnimateClick(true)

        setTimeout ( () => {
            setAnimateClick(false)
        },150)
    }

  return (
    <div onClick={ () => closeModal()} className='absolute top-0 left-0 w-full h-screen bg-grape-300 bg-opacity-40 flex justify-center items-center z-20 transition-all ease-out'>
      
      <div className='relative w-1/4 h-2/6 bg-grape-200 rounded-xl flex flex-col'>
        <div className='w-full flex justify-between'>
            <h2 className='text-xl p-4 text-white font-inter'>Share</h2>
            <button onClick={ () => closeModal()} className='text-2xl px-5 py-0 text-white font-thin'>X</button>
        </div>

        <div className='p-5 flex flex-row gap-5'>
        
            <SocialMediaShareBtn 
                socialMediaName={"Facebook"}
                shareTo={`https://www.facebook.com/sharer/sharer.php?u=${link}`}/>

            <SocialMediaShareBtn 
                socialMediaName={"Twitter"}
                shareTo={`https://www.twitter.com/intent/tweet?url=${link}&text="Hey guys, I found a cool resource wich can help you in your developer career!"`}/>
        </div>


        <div className='w-5/6 p-5 m-auto rounded-xl bg-grape-50 flex flex-row justify-between items-center'>
            <p className='text-xs'>{link}</p>
            <button onClick={ e => Clicked(e)}
                    className={`bg-gray-800 hover:scale-[1.02] px-4 py-1 rounded-xl transition-all ease-in-out font-roboto text-white ${animateClick ? "animateClick" : ""}`}
                    >Copy
            </button>
        </div>
      </div>

    </div>
  )
}

export default ShareModal
