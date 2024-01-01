import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CustomBackground from "./components/background"
import ThemeProvider from "./context/ThemeContext"
import Navbar from "./components/navbar"
import UserAccount from "./pages/Profile"
import Setting from "./pages/Setting"
import CreateGraph from "./pages/CreateGraph"
import GraphDetail from "./pages/GraphDetail"
import Pricing from "./pages/Pricing"

function App() {
  

  return (
    <>
    <ThemeProvider>
      <CustomBackground >
        <Navbar />
        <div className="p-2 max-w-[98%] sm:max-w-[700px] md:max-w-[1080px] mx-auto">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/user_account" element={<UserAccount/>}/>
            <Route path="/setting" element={<Setting />} />
            <Route path="/create_graph" element={<CreateGraph />}/>
            <Route path="/graph_detail" element={<GraphDetail />} />
            <Route path="/pricing" element={<Pricing />}/>
          </Routes>      
        </div>
       
      </CustomBackground>
    </ThemeProvider>
    </>
  )
}

export default App
