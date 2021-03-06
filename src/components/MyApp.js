import React from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import Experience from "./Experience"
import ProjectSlider from "./ProjectSlider"
import Footer from "./Footer"

class App extends React.Component{
    render(){
    return(<div>
       
      <div id = "homewrapper">
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
        <NavBar />
        <Header  />
        <Experience />
        <ProjectSlider />
        <Footer/>
        </div> 
        </div>
    )}
}

export default App