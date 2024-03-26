import React from 'react'

import allowedLockerroom from '../../../public/assets/allowed-lockerroom.png'
import closedLockerroom from '../../../public/assets/closed-lockerroom.png'
import notAllowedFountain from '../../../public/assets/not_allowed-fountain.png'
import partialFountain from '../../../public/assets/partial-fountain.png'
import partialLockerroom from '../../../public/assets/partial-lockerroom.png'
import recommendedMask from '../../../public/assets/recommended-mask.png'
import recommendedTowel from '../../../public/assets/recommended-towel.png'
import requiredMask from '../../../public/assets/required-mask.png'
import requiredTowel from '../../../public/assets/required-towel.png'
import Box from './Box'

export default function Legend() {
  return (
    <div className='px-72 py-12'>
      <div className='bg-[#F5F5F5] p-5 flex justify-between'>
        <Box
          icon1={requiredMask}
          icon2={recommendedMask}
          title='Máscara'
          legend1='Obrigatório'
          legend2='Recomendado'
        />
        <Box
          icon1={requiredTowel}
          icon2={recommendedTowel}
          title='Toalha'
          legend1='Obrigatório'
          legend2='Recomendado'
        />
        <Box
          icon1={partialFountain}
          icon2={notAllowedFountain}
          title='Bebedouro'
          legend1='Parcial'
          legend2='Proibido'
        />
        <Box
          icon1={allowedLockerroom}
          icon2={partialLockerroom}
          icon3={closedLockerroom}
          title='Bebedouro'
          legend1='Liberado'
          legend2='Parcial'
          legend3='Fechado'
        />
      </div>
    </div>
  )
}
