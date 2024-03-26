import React from 'react'

import forbiddenFountain from '../../../public/assets/forbidden-fountain.png'
import forbiddenLockerroom from '../../../public/assets/forbidden-lockerroom.png'
import partialFountain from '../../../public/assets/partial-fountain.png'
import partialLockerroom from '../../../public/assets/partial-lockerroom.png'
import recommendedMask from '../../../public/assets/recommended-mask.png'
import recommendedTowel from '../../../public/assets/recommended-towel.png'
import requiredLockerroom from '../../../public/assets/required-lockerroom.png'
import requiredMask from '../../../public/assets/required-mask.png'
import requiredTowel from '../../../public/assets/required-towel.png'
import Box from './Box'

export default function Legend() {
  return (
    <div className='px-72 py-12'>
      <div className='bg-[#F5F5F5] p-5 gap-3 flex'>
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
          icon2={forbiddenFountain}
          title='Bebedouro'
          legend1='Parcial'
          legend2='Proibido'
        />
        <Box
          icon1={requiredLockerroom}
          icon2={partialLockerroom}
          icon3={forbiddenLockerroom}
          title='Bebedouro'
          legend1='Liberado'
          legend2='Parcial'
          legend3='Fechado'
        />
      </div>
    </div>
  )
}
