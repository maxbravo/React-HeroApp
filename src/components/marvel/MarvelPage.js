import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel Page</h1>
      <hr/>
      <HeroList publisher="Marvel Comics" />      
    </div>
  )
}
