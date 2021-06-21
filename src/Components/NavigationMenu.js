import React from 'react'
import {
  Link
} from "react-router-dom"

function NavigationMenu(props){
  let rand = Math.floor(Math.random() * 10) + 1;
  console.log(rand)
  let link = '/product/'+rand
  return(
    <div>
    <div className="font-bold py-3">
      AppName
    </div>
    <ul>
      <li>
        <Link
          to="/"
          className="text-blue-500 py-3 border-t border-b block"
          onClick = {props.closeMenu}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={link}

          params={rand}
          className="text-blue-500 py-3 border-b block"
          onClick = {props.closeMenu}
        >
          Product
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-blue-500 py-3 border-b block"
          onClick = {props.closeMenu}
        >
          About
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default NavigationMenu
