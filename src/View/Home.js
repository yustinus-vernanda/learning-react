import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import HelloWorld from '../Components/HelloWorld'
import ProductCard from '../Components/ProductCard'


function Home(){
  let content = null
    const url = `https://60cbfbd371b73400171f6cfb.mockapi.io/api/v1/products?page=1&limit=10`
    const [products,setProducts]= useState({
      loading: false,
      data: null,
      error:false
    })

  useEffect(()=>{
      setProducts({
          loading:true,
          data:null,
          error:false
      })
      axios.get(url)
        .then(response=>{
          setProducts({
              loading: false,
              data: response.data,
              error:false
          })
        })
        .catch(()=>{
          setProducts({
              loading:false,
              data:null,
              error:true
          })
        })
    },[url])

  if(products.loading){
    content = <Loader/>
  }

  if(products.error){
    content =
      <p>
          There was an error please refresh or try again later
      </p>
  }

  if(products.data){
    content = products.data.map((product,key) =>
        <div key={product.id}>
          <ProductCard
            product = {product}
            />
        </div>
    )
  }

  return(
    <div>
        <h1 className="font-bold text-2xl">
            Best Sellers
        </h1>
        {content}
    </div>
  )
}

export default Home
