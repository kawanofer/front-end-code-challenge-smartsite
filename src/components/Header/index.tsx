import Image from 'next/image'

import React from 'react'

import SmartFitLogo from '../../../public/assets/logo.svg'

export default function Header() {
  return (
    <header>
      <div className='bg-black py-10 flex justify-center items-center'>
        <Image
          alt='Smartfit logo em branco e amarelo'
          priority={false}
          src={SmartFitLogo}
          width={100}
          height={100}
        />
      </div>
      <section className='py-12 max-w-screen-xl m-auto'>
        <div className='text-5xl font-bold mb-5'>
          REABERTURA
          <br />
          SMART FIT
        </div>
        <div className='h-3 bg-darkGrey w-20' />
        <p className='mt-10 text-lightGrey'>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </section>
    </header>
  )
}
