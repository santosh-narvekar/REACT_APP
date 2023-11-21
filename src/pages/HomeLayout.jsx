import { Outlet,useNavigation } from "react-router-dom"
import { Header } from "../components"
import {Navbar,Loading} from '../components'

const HomeLayout = () => {
  const {state} = useNavigation();
  const isPageLoading = state==='loading'
  return (
    <>  
    
    <Header/>
    <Navbar/>
   {
    isPageLoading?(
      <Loading/>
    ):(
      <section className="align-element py-20">
          <Outlet/>
      </section>
    )
   }
      </>
  )
}

export default HomeLayout
