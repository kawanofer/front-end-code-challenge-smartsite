import React from 'react';
import Image from 'next/image'
import SmartFitLogo from '../../../public/assets/logo.svg';

export default function Footer() {
  return (
    <div className='bg-darkGrey py-10 flex flex-col justify-center items-center'>
      <Image
        alt='Smartfit logo em branco e amarelo'
        priority={false}
        src={SmartFitLogo}
        height={110}
      />
      <p className='mt-3 text-white'>Todos os direitos reservados - 2020</p>
    </div>
  );
}
