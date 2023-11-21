import { useState } from "react"
import Navbar from "./Navbar";

const Toggle = () => {
  const [theme,setTheme]=useState(true);
  console.log(theme);
  setTheme(theme=>!theme)
  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default Toggle