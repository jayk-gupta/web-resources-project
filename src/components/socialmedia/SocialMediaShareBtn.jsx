import React from 'react'

const SocialMediaShareBtn = ({socialMediaName,shareTo}) => {
  return (

          <figure className='w-[50px] h-[50px] flex flex-col justify-center items-center'>
              <a href={shareTo} target="_blank">
                <img className="w-full h-full cursor-pointer" src={`./SocialMedia/${socialMediaName}_icon.png`} alt={`${socialMediaName} icon`} />
              </a>
              <figcaption className='text-white text-sm font-light'>{socialMediaName}</figcaption>
          </figure>
  )
}

export default SocialMediaShareBtn
