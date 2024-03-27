'use client'

import Image from 'next/image'

import React from 'react'

import clock from '../../../public/assets/icon-hour.png'
import Button from '../Button'

export default function Form({ locationsSize }) {
  const onSubmit = (event: any) => {
    event.preventDefault()
    console.log('SUBMIT')
  }

  const onReset = () => {
    console.log('reset')
  }

  return (
    <form
      onSubmit={onSubmit}
      onReset={onReset}
      className='flex flex-col items-start justify-center border-4 rounded-lg p-5'>
      <div className='flex items-center gap-3'>
        <Image src={clock} alt={'clock icon'} width={30} height={30} /> Horário
      </div>

      <h3 className='text-2xl py-5'>Qual periodo quer treinar?</h3>

      <div className='flex items-center justify-start border-lightText border-t-2 p-3 relative w-full'>
        <input type='radio' name='hour' value='morning' />
        <label className='ml-3'>Manhã</label>
        <span className='absolute right-0'>06:00 ás 12h</span>
      </div>

      <div className='flex items-center justify-start border-lightText border-t-2 p-3 relative w-full'>
        <input type='radio' name='hour' value='afternoon' />
        <label className='ml-3'>Tarde</label>
        <span className='absolute right-0'>12:01 ás 18h</span>
      </div>

      <div className='flex items-center justify-start border-lightText border-t-2 p-3 relative w-full'>
        <input type='radio' name='hour' value='night' />
        <label className='ml-3'>Noite</label>
        <span className='absolute right-0'>18:01 ás 23h</span>
      </div>

      <div className='flex items-center justify-start border-lightText border-t-2 p-3 relative w-full'>
        <div className='checkbox'>
          <input type='checkbox' name='showClosed' />
          <label className='ml-3'>Exibir unidades fechadas</label>
        </div>
        <span className='absolute right-0'>
          Resultados encontrados: <b>{locationsSize}</b>
        </span>
      </div>

      <div className='flex gap-5 m-auto mt-7'>
        <Button id='btn-submit' variant='primary' type='submit'>
          ENCONTRAR UNIDADE
        </Button>
        <Button id='btn-reset' variant='secondary' type='reset'>
          LIMPAR
        </Button>
      </div>
    </form>
  )
}
