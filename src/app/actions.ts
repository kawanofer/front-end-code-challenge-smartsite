'use server'

import axios from 'axios'

export async function fetchLocations() {
  const { data: locationsList } = await axios.get(
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'
  )
  return { locationsList }
}
