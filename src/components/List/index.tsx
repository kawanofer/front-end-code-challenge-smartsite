'use client'

import Image from 'next/image'
import React from 'react'

type LocationProps = {
  content: string
  fountain: string
  id: number
  locker_room: string
  mask: string
  opened: boolean
  title: string
  towel: string
  schedules?: Schedule[]

  city_name?: string
  region?: string
  state_name?: string
  street?: string
  uf?: string
}

type Schedule = {
  hour: string
  weekdays: string
}

export default function List({
  locations
}: Readonly<{ locations: Readonly<LocationProps>[] }>) {
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
    <div className='flex flex-wrap gap-5'>
      {locations?.map((loc: LocationProps, index: number) => {
        return (
          <div
            className='bg-grey p-5 w-96 flex flex-col shadow-md shadow-lightGrey'
            key={loc.id + '-' + index}>
            {handleIsOpen(loc.opened)}
            <h3 className='text-2xl font-semibold py-3'>{loc.title}</h3>
            {loc.content && (
              <p dangerouslySetInnerHTML={{ __html: loc.content }} />
            )}
            {!loc.content && <p>{getFullAddreess(loc)}</p>}

            {(loc.mask || loc.towel || loc.fountain || loc.locker_room) && (
              <div className='w-full bg-lightGrey h-px my-5' />
            )}

            <ul className='flex justify-between'>
              {loc.mask && (
                <Image
                  src={`/assets/${loc.mask}-mask.png`}
                  alt={`${loc.mask} mask icon`}
                  height={100}
                  width={110}
                />
              )}
              {loc.towel && (
                <Image
                  src={`/assets/${loc.towel}-towel.png`}
                  alt={`${loc.mask} towel icon`}
                  height={100}
                  width={110}
                />
              )}
              {loc.fountain && (
                <Image
                  src={`/assets/${loc.fountain}-fountain.png`}
                  alt={`${loc.mask} fountain icon`}
                  height={100}
                  width={110}
                />
              )}
              {loc.locker_room && (
                <Image
                  src={`/assets/${loc.locker_room}-lockerroom.png`}
                  alt={`${loc.mask} lockerroom icon`}
                  height={100}
                  width={110}
                />
              )}
            </ul>

            <ul className='flex flex-wrap w-full gap-5 mt-5'>
              {loc?.schedules?.map((schedule, index) => {
                return (
                  <li
                    className='flex flex-col flex-wrap gap-x-5 gap-y-1'
                    key={JSON.stringify(schedule)}>
                    <p className='text-darkGrey text-xl'>{schedule.weekdays}</p>
                    <div className='text-lightGrey'>{schedule.hour}</div>
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
