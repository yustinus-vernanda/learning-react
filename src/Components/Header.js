import React from 'react'
import Navigation from './Navigation'

function Header(){
  return(
    <header className="border-b font-bold p-3 flex justify-between item-center">
      <span className="font-bold">
      AppName
      </span>
      <Navigation/>
    </header>
  )
}

export default Header
