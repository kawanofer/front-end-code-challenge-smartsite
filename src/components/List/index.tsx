'use client'

import Image from 'next/image'
import React, { useContext } from 'react'

import { LocationsContext } from '@/store/context/LocationsContext'

import { LocationProps } from '@/types/locationTypes'

export default function List({
  locations
}: Readonly<{ locations: Readonly<LocationProps>[] }>) {
  const { storeLocationsFiltered } = useContext(LocationsContext) as { storeLocationsFiltered: LocationProps[]; };

  const handleIsOpen = (opened: boolean) => {
    if (opened) {
      return <span className='text-green font-semibold'>Aberto</span>
    }
    return <span className='text-red font-semibold'>Fechado</span>
  }

  const getFullAddreess = (loc: LocationProps) => {
    return `${loc.street} - ${loc.region} - ${loc.city_name} - ${loc.uf}`
  }

  return (
    <div className='grid grid-cols-3 gap-5'>
      {storeLocationsFiltered.map((loc: LocationProps, index: number) => {
        return (
          <div
            className='flex flex-col bg-grey p-5 shadow-md shadow-lightGrey bg-boxBGColor'
            key={loc.id + '-' + index}>
            {handleIsOpen(loc.opened)}
            <h3 className='text-3xl font-semibold py-3'>{loc.title}</h3>
            {loc.content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: loc?.content.replace(/\n/g, '')
                }}
              />
            )}
            {!loc.content && <p>{getFullAddreess(loc)}</p>}

            {(loc.mask || loc.towel || loc.fountain || loc.locker_room) && (
              <div className='w-full bg-lightGrey h-px my-5' />
            )}

            <ul className='flex justify-between'>
              {loc.mask && (
                <Image
                  alt={`${loc.mask} mask icon`}
                  height={100}
                  src={`/assets/${loc.mask}-mask.png`}
                  width={110}
                />
              )}
              {loc.towel && (
                <Image
                  alt={`${loc.mask} towel icon`}
                  height={100}
                  src={`/assets/${loc.towel}-towel.png`}
                  width={110}
                />
              )}
              {loc.fountain && (
                <Image
                  alt={`${loc.mask} fountain icon`}
                  height={100}
                  src={`/assets/${loc.fountain}-fountain.png`}
                  width={110}
                />
              )}
              {loc.locker_room && (
                <Image
                  alt={`${loc.mask} lockerroom icon`}
                  height={100}
                  src={`/assets/${loc.locker_room}-lockerroom.png`}
                  width={110}
                />
              )}
            </ul>

            <ul className='grid grid-cols-2 w-full gap-5 mt-5'>
              {loc?.schedules?.map((schedule, index) => {
                return (
                  <li
                    className='flex flex-col flex-wrap gap-x-5 gap-y-1'
                    key={JSON.stringify(schedule)}>
                    <p className='text-darkGrey text-2xl font-bold'>
                      {schedule.weekdays}
                    </p>
                    <div className='text-lightGrey font-semibold'>
                      {schedule.hour}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
