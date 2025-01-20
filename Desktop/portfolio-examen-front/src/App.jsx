import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import NavBar from "../components/NavBar"
import Apropos from "../Pages/Apropos"
import Skills from "../pages/Skills"
import Parcours from "../pages/Parcours"
import Contact from "../pages/Contact"
import Projets from "../pages/Projets"


function App() {


  return <>
<BrowserRouter>
<NavBar></NavBar>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/Apropos" element={<Apropos/>} />
  <Route path="/Skills" element={<Skills/>} />
  <Route path="/Parcours" element={<Parcours/>} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Projets" element={<Projets />} />

</Routes>
</BrowserRouter>
  </>
}

export default App
