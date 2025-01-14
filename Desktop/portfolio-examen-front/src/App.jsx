import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import NavBar from "../components/NavBar"
import Apropos from "../Pages/Apropos"
import Skills from "../pages/Skills"


function App() {


  return <>
<BrowserRouter>
<NavBar></NavBar>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/Apropos" element={<Apropos/>} />
  <Route path="/Skills" element={<Skills/>} />

</Routes>
</BrowserRouter>
  </>
}

export default App
