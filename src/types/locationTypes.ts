export type LocationProps = {
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
