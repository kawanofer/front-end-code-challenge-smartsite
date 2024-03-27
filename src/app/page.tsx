import React from 'react'

import Form from '@/components/Form'
import Legend from '@/components/Legend'
import List from '@/components/List'

import { fetchLocations } from './actions'

export default async function Home() {
  const { locationsList } = await fetchLocations()

  return (
    <>
      <Form locationsSize={locationsList?.locations.length} />
      <Legend />
      <List locations={locationsList?.locations} />
    </>
  )
}
