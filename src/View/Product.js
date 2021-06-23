import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import {useAxiosGet} from '../Hooks/HttpRequest'

function Product(){
  const {id} = useParams()
  const url = `https://60cbfbd371b73400171f6cfb.mockapi.io/api/v1/products/${id}`

  let product = useAxiosGet(url)


  let content = null




  if(product.loading){
    content = <Loader/>
  }

  if(product.error){
    content =
    <p>
        There was an error please refresh or try again later
    </p>
  }


  if(product.data){
    content =
    <div>
      <h1 className="text-2xl font-bold mb-3">
        {product.data.name}
      </h1>
      <div>
        <img
          className="object-none h-48 w-48"
          src={product.data.images[0].imageUrl}
          alt={product.data.name}/>
      </div>
      <div className="font-bold text-xl mb-3">
        $ {product.data.price}
      </div>
      <div>
        {product.data.description}
      </div>
    </div>
  }

  return(
    <div>
      {content}
    </div>
  )

}

export default Product
