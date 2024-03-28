'use client'

import Image from 'next/image'
import React, { useState, useContext } from 'react'
import { some, isEmpty } from 'lodash'

import clock from '../../../public/assets/icon-hour.png'
import Button from '../Button'
import { LocationsContext } from '@/store/context/LocationsContext'

import { LocationProps } from '@/types/locationTypes'

const PERIOD = {
  'morning': ['06', '12'],
  'afternoon': ['12', '18'],
  'night': ['18', '23']
}

type periodProps = 'morning' | 'afternoon' | 'night' | ''

export default function Form({
  locations
}: Readonly<{ locations: Readonly<LocationProps>[] }>) {
  const { storeLocationsFiltered, setStoreLocationsFiltered } = useContext(LocationsContext)

  const [selectedPeriod, setSelectedPeriod] = useState<periodProps>('')
  const [showClosed, setShowClosed] = useState<boolean>(false)

  const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPeriod(event.target.value)
  };

  const handleShowClosedChange = () => {
    setShowClosed(!showClosed)
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let filtered = locations
    const period = PERIOD[selectedPeriod]

    if (showClosed) {
      filtered = filtered.filter(loc => loc?.opened !== true)
    }

    if (!isEmpty(selectedPeriod)) {
      const locationsWithinPeriod = locations.filter(loc => {
        return some(loc.schedules, (schedule) => {
          if (schedule.hour !== 'Fechada') {
            const start = schedule.hour.substring(0, 2)
            const end = schedule.hour.substring(schedule.hour.length - 1, schedule.hour.length - 3)
            if (period[0] >= start && period[1] <= end) {
              return true
            }
          }
          return false
        })
      })
      setStoreLocationsFiltered(locationsWithinPeriod)
    } else {
      setStoreLocationsFiltered(filtered)
    }
  }

  const onReset = () => {
    setSelectedPeriod('')
    setShowClosed(false)
    setStoreLocationsFiltered(locations)
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
        <input
          type='radio'
          name='hour'
          value='morning'
          checked={selectedPeriod === 'morning'}
          onChange={handleHourChange}
        />
        <label className='ml-3'>Manhã</label>
        <span className='absolute right-0'>06:00 ás 12h</span>
      </div>

      <div className='flex items-center justify-start border-lightText border-t-2 p-3 relative w-full'>
        <input
          type='radio'
          name='hour'
          value='afternoon'
          checked={selectedPeriod === 'afternoon'}
          onChange={handleHourChange}
        />
        <label className='ml-3'>Tarde</label>
        <span className='absolute right-0'>12:01 ás 18h</span>
      </div>

      <div className='flex items-center justify-start border-lightText border-t-2 p-3 relative w-full'>
        <input
          type='radio'
          name='hour'
          value='night'
          checked={selectedPeriod === 'night'}
          onChange={handleHourChange}
        />
        <label className='ml-3'>Noite</label>
        <span className='absolute right-0'>18:01 ás 23h</span>
      </div>

      <div className='flex items-center justify-start border-lightText border-t-2 p-3 relative w-full'>
        <div className='checkbox'>
          <input
            type='checkbox'
            name='showClosed'
            checked={showClosed}
            onChange={handleShowClosedChange}
          />
          <label className='ml-3'>Exibir unidades fechadas</label>
        </div>
        <span className='absolute right-0'>
          Resultados encontrados: <b>{storeLocationsFiltered.length}</b>
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

