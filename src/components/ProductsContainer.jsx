import ProductsList from "./ProductsList"
import Productsgrid from "./Productsgrid"
import {BsFillGridFill,BsList} from 'react-icons/bs'
import { useLoaderData } from "react-router-dom"
import { useState } from "react"

const ProductsContainer = () => {
  const {meta} = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout,setLayout]=useState('grid');

  const setActiveStyles = (pattern) => {
    // checking for pattern list or grid
    return `text-xl btn btn btn-circle btn-sm
    ${
      pattern === layout ? 'btn-primary text-primary-content':
      'btn-ghost text-based-content'
    }
    `
  }
  return (
    <>
    {/* HEADER */}
    <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
      <h4 className="font-medium text-md">
      
          {totalProducts} product{totalProducts > 1 && 's'}
      </h4>
      <div className="flex gap-x-2">
        <button
        onClick={()=>setLayout('grid')}
        className={setActiveStyles('grid')}
        >
          <BsFillGridFill/>
        </button>
        <button
        onClick={()=>setLayout('list')}
        className={setActiveStyles('list')}
        
        >
          <BsList/>        
        </button>
      </div>
    </div>
    {/* PRODUCTS */}
    {
      totalProducts===0?
      'Sorry, no products matched your search...'
      :layout==='grid'?
      <Productsgrid/>
      :<ProductsList/>
    }
    </>
  )
}

export default ProductsContainer
