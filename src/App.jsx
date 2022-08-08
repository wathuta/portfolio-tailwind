import About from "./components/About"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"
import Contacts from "./Contacts"


function App() {

  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contacts/>
    <SocialLinks/>
    </div>
  )
}

export default App
