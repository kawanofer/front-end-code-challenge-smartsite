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
          width={230}
        />
      </div>
      <section className='pt-20 pb-10 max-w-screen-xl m-auto'>
        <div className='text-6xl font-bold mb-5'>
          REABERTURA
          <br />
          SMART FIT
        </div>
        <div className='h-3 bg-darkGrey w-32' />
        <p className='mt-10 text-lightGrey font-semibold'>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </section>
    </header>
  )
}
