import './App.css'
import Home from './components/Home/Pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Projects from './components/projects/Projects'
import Task from './components/Task Management/Task';
import HomeTooltip from './components/Tooltip/Home';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/projects' element={<Projects/>}/>
 <Route path='/task-managment' element={<Task/>}/>     
 <Route path='/tooltip' element={<HomeTooltip/>}/>     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
