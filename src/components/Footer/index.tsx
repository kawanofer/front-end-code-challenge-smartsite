import Image from 'next/image'

import React from 'react'

import SmartFitLogo from '../../../public/assets/logo.svg'

export default function Footer() {
  return (
    <footer className='bg-darkGrey py-10 mt-20 gap-3 flex flex-col justify-center items-center'>
      <Image
        alt='Smartfit logo em branco e amarelo'
        priority={false}
        src={SmartFitLogo}
        height={50}
      />
      <p className='text-lightText text-xl'>
        Todos os direitos reservados - 2020
      </p>
    </footer>
  )
}
