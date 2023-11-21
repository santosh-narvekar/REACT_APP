import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({label,name,size,price}) => {
  const step = 1000; // 10 dollars
  const maxPrice = 100000; // 1000 dollars
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <>
    <div className="form-control">
      <label htmlFor={name} 
    className="label cursor-pointer">
      <span className="label-text capitalize">{label}</span>
      <span>
      {formatPrice(selectedPrice)}</span>
    </label>
    <input type="range" 
    name = {name}
    value = {selectedPrice}
    step = {step}
    max = {maxPrice}
    min={0}
    onChange = {(e)=>setSelectedPrice(e.target.value)}
    className={`range range-primary ${size}`}>
    </input>

    <div className="w-full flex justify-between text-xs px-2 mt-2">
      <span className="font-bold text-md">0</span>
      <span className="font-bold text-md">Max:{formatPrice(maxPrice)}</span>
      
    </div>
    </div>
    </>
  )
}

export default FormRange
 

