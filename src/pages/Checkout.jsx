
import { useSelector } from "react-redux/es/hooks/useSelector"
import {CheckoutForm,SectionTitle,CartTotals} from '../components';
import { Navigate, redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => ({request}) => {
  const user = store.getState().userState.user;
  if(!user){
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
}

const Checkout = () => {
  
  const cartTotal = useSelector((state)=>state.cartState.cartTotal);
  
  if(cartTotal===0){
    return <SectionTitle text='your cart is empty' />
  }
  return (
    <>
     
     <SectionTitle
     text='place your order'
     />
     <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
      {/* AT MIN-WIDTH OR TILL WIDTH OF 769 PX THAT IS MD , IT MUST BE  A TWO COLUMN LAYOUT A GRID */}
      <CheckoutForm />
      <CartTotals />
     </div>
    </>

  )
}

export default Checkout
