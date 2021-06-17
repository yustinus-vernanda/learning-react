import React,{useState} from 'react'
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'


function Navigation(){

  const [showMenu,setShowMenu] = useState(false)

  const MaskTransitions = useTransition(showMenu,null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const transitions = useTransition(showMenu,null, {
    from: { opacity: 0,transform:'translateX(-100%)' },
    enter: { opacity: 1,transform:'translateX(0%)'  },
    leave: { opacity: 0 ,transform:'translateX(-100%)' },
  })



  //className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
  //MenuMask className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

  /*let menu
  let menuMask

  if(showMenu){
   menu =
   <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
    This is the menu
   </div>

   menuMask =
    <div
      className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
      onClick={()=>setShowMenu(false)}
    >
    </div>

  }*/



  return(
    <nav>
      <span className="text-al">
        <FontAwesomeIcon
          icon = {faBars}
          onClick= {()=>setShowMenu(!showMenu)}
        />
      </span>
      {
        MaskTransitions.map(({item,key,props}) => item &&
          <animated.div
          key={key}
          style={props}
          className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
          onClick={()=>setShowMenu(false)}
          >

          </animated.div>
        )
      }
      {
        transitions.map(({item,key,props}) => item &&
          <animated.div
          key={key}
          style={props}
          className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
          >
            <span className="font-bold">
              The Menu
            </span>
            <ul>
              <li>Home</li>
            </ul>
          </animated.div>
        )
      }
    </nav>
  )
}

export default Navigation
