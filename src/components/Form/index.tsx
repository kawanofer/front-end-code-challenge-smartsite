'use client'

import Image from 'next/image'

import React from 'react'

import clock from '../../../public/assets/icon-hour.png'
import Button from '../Button'

export default function Form() {
  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log('SUBMIT')
  }

  const onReset = () => {
    console.log('reset')
  }

  return (
    <form className='px-72' onSubmit={onSubmit} onReset={onReset}>
      <div className='flex flex-col justify-center border-4 rounded-lg p-5 w-full'>
        <div className='flex items-center gap-5'>
          <Image src={clock} alt={'clock icon'} width={30} height={30} />
          Horário
        </div>

        <h3 className='text-2xl py-5'>
          Qual periodo quer treinar?
        </h3>

        <div className='flex items-center justify-start border-lightGrey border-t-2 p-3 w-full'>
          <input type="radio" name="hour" value="morning" />
          <label className='ml-3'>Manhã</label>
          <span className='absolute right-0'>06:00 ás 12h</span>
        </div>

        <div className='flex justify-center gap-3'>
          <Button id='btn-submit' variant='primary' type='submit'>ENCONTRAR UNIDADE</Button>
          <Button id='btn-reset' variant='secondary' type='reset'>LIMPAR</Button>
        </div>

      </div>
    </form>
  )
}
