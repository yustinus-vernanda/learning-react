import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import HelloWorld from '../Components/HelloWorld'

function Home(){
  let content = null
  const {id} = useParams()
    const url = `https://60cbfbd371b73400171f6cfb.mockapi.io/api/v1/products/${id}`
    const [product,setProduct]= useState({
      loading: false,
      data: null,
      error:false
    })

  useEffect(()=>{
      setProduct({
          loading:true,
          data:null,
          error:false
      })
      axios.get(url)
        .then(response=>{
          setProduct({
              loading: false,
              data: response.data,
              error:false
          })
        })
        .catch(()=>{
          setProduct({
              loading:false,
              data:null,
              error:true
          })
        })
    },[url])
  return(
    <div>
        <h1 className="font-bold text-2xl">
            Best Sellers
        </h1>
        {content}
        /*<HelloWorld name="Nanda"/>*/
    </div>
  )
}

export default Home
