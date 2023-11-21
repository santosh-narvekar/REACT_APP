import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url='/products';

export const loader=async({request})=>{
  // new url object
  const params = Object.fromEntries([...new URL(request.url).searchParams]);
  console.log(params)
  const response = await customFetch(url,{
    params
  });
  const {data} = response.data;
  const {meta} = response.data;
  return {products:data,meta,params};
}


const Products = () => {
  return (
    <>
    <Filters />
    <ProductsContainer />
    <PaginationContainer />
    </>
  )
}

export default Products
