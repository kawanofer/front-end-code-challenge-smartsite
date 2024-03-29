import React from 'react'

import Form from '@/components/Form'
import Legend from '@/components/Legend'
import List from '@/components/List'
import { LocationsProvider } from '@/store/context/LocationsContext'

import { fetchLocations } from './actions'

export default async function Home() {
  const { locationsList } = await fetchLocations()

  return (
    <LocationsProvider>
      <Form locations={locationsList.locations} />
      <Legend />
      {locationsList.locations?.length > 0 && (
        <List locations={locationsList.locations} />
      )}
    </LocationsProvider>
  )
}
