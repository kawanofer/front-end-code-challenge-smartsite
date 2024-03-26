

import React from 'react';
import Image from 'next/image'
import SmartFitLogo from '../../../public/assets/logo.svg';

export default function Header() {
  return (
    <>
      <header className='bg-black py-10 flex justify-center items-center'>
        <Image
          alt='Smartfit logo em branco e amarelo'
          priority={false}
          src={SmartFitLogo}
          width={100}
          height={100}
        />
      </header>
      <section className='px-72 py-12'>
        <div className='text-3xl font-bold mb-5'>REABERTURA<br />SMART FIT</div>
        <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
      </section>
    </>
  );
}
