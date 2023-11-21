import { redirect,useLoaderData } from "react-router-dom";
import {toast} from 'react-toastify';
import {customFetch} from '../utils';
import {OrdersList,ComplexPaginationContainer
  ,SectionTitle} from '../components';

export const loader = (store) => async({request})=>{
  console.log(store)
  const user = store.getState().userState.user;
  if(!user){
    toast.warn('You must be logged in to view orders');
    return redirect('/login');
  }

  // for pagination
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  console.log([...new URL(request.url).searchParams]);
  console.log(params);
  try{
    const response = await customFetch.get('/orders',{
      params,
      headers:{
        Authorization: `Bearer ${user.token}`
      }
    })
    console.log(response)
    return {orders:response.data.data,meta:response.data.meta}
  }
  catch(error){
      console.log(error);
      const errorMessage = error?.response?.data?.error?.message || 'there was an error placing your order';
      toast.error(errorMessage);
      if(error.response.status===401 || 403) return redirect('/login')
      return null; 
  }
}

const Orders = () => {
  const { meta } = useLoaderData();
  if(meta.pagination.total < 1){
    return <SectionTitle text='please make an order'/>
  }
  return (
    <> 
    <SectionTitle text='Your Orders'/>
    <OrdersList />
    <ComplexPaginationContainer />
    </>
  )
}

export default Orders
