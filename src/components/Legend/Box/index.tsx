import Image, { StaticImageData } from 'next/image'
import React from 'react'

type BoxProps = {
  icon1: StaticImageData
  icon2: StaticImageData
  icon3?: StaticImageData
  legend1: string
  legend2: string
  legend3?: string
  title: string
}

const Box: React.FC<BoxProps> = ({ icon1, icon2, icon3, title, legend1, legend2, legend3 }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <p className='text-lg font-bold'>{title}</p>

      <div className='flex gap-5'>
        <div className='mt-3 items-center text-center'>
          <Image src={icon1} alt={`Icon ${title} ${legend1}`} height={100} />
          <p className='text-lg mt-3'>{legend1}</p>
        </div>

        <div className='mt-3 items-center text-center'>
          <Image src={icon2} alt={`Icon ${title} ${legend2}`} height={100} />
          <p className='text-lg mt-3'>{legend2}</p>
        </div>

        {icon3 &&
          <div className='mt-3 items-center text-center'>
            <Image src={icon3} alt={`Icon ${title} ${legend3}`} height={100} />
            <p className='text-lg mt-3'>{legend3}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Box
