import React from 'react'
import Image from 'next/image'

import clock from '../../../public/assets/icon-hour.png'

export default function Form() {
  return (
    <div className='px-72 py-12'>
      <div className='border rounded-md p-5 border-md'>
        <div className='flex items-center gap-5'>
          <Image
            src={clock}
            alt={'clock icon'}
            width={50}
            height={50}
          />
          Horário
        </div>
      </div>
    </div>
  )
}
