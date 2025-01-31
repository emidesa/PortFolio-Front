import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import NavBar from "../components/NavBar"
import Apropos from "../Pages/Apropos"
import Skills from "../pages/Skills"
import Parcours from "../pages/Parcours"
import Contact from "../pages/Contact"
import Projets from "../pages/Projets"
import Particles from "../components/particles"
import AdminLogin from "../pages/adminLogin"
import ProfilPageAdmin from "../pages/ProfilPageAdmin"


function App() {


  return <>
<BrowserRouter>
<Particles/>
<NavBar/>

<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/Apropos" element={<Apropos/>} />
  <Route path="/Skills" element={<Skills/>} />
  <Route path="/Parcours" element={<Parcours/>} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Projets" element={<Projets />} />
  <Route path='/adminLogin' element={<AdminLogin/>}/>
  <Route path='/profilPageAdmin' element={<ProfilPageAdmin/>}/>
</Routes>

</BrowserRouter>
  </>
}

export default App
