import Body from "./Body"
import Login from "./Login"
import Navbar from "./Navbar"
import Profile from"./Profile"
import Feed from"./Feed"
import { Provider } from "react-redux"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Appstore from "./utils/Appstore"
import Connections from "./Connections"
import Request from "./Request"
function App() {


  return (
    <>
    <Provider store={Appstore}>
    <BrowserRouter basename="/"> 
    <Routes>
<Route path="/" element={<Body/>}>
  <Route path="/" element ={<Feed/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/Profile" element={<Profile/>}/>
  <Route path="/connections" element={<Connections/>}/>
  <Route path="/requests" element={<Request/>}/>
</Route>
    </Routes>
    </BrowserRouter>
   </Provider>
    </>
  )
}

export default App
