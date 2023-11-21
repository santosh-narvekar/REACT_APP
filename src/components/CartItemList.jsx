import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartItemList = () => {
  console.log(useSelector((state)=>state.cartState.cartItems));
 const {cartItems} = useSelector((state)=>state.cartState)
  return (
    <div>
      {
        cartItems.map((cartItem)=>{
          return <CartItem key={cartItem.cartID} {...cartItem} />
        })
      }
    </div>
  )
}

export default CartItemList
