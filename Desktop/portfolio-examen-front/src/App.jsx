import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import NavBar from "../components/NavBar"


function App() {


  return <>
<BrowserRouter>
<NavBar></NavBar>
<Routes>
  <Route path="/" element={<Homepage />} />
</Routes>
</BrowserRouter>
  </>
}

export default App
