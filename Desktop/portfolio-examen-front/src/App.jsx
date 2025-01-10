import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import NavBar from "../components/NavBar"
import Apropos from "../Pages/Apropos"


function App() {


  return <>
<BrowserRouter>
<NavBar></NavBar>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/Apropos" element={<Apropos/>} />

</Routes>
</BrowserRouter>
  </>
}

export default App
