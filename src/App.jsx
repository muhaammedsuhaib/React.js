import './App.css'
import Home from './components/Home/Pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Projects from './components/projects/Projects'
import Task from './components/Task Management/Task';
import HomeTooltip from './components/Tooltip/Home';
import Rating from './components/Start Rating/Rating';
import Methods from './components/Methods/Methods';
import Custom from './components/custom/Custom';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/projects' element={<Projects/>}/>
 <Route path='/task-managment' element={<Task/>}/>     
 <Route path='/tooltip' element={<HomeTooltip/>}/>     
 <Route path='/rating-star' element={<Rating/>}/>     
 <Route path='/methods' element={<Methods/>}/>     
 <Route path='/custom' element={<Custom/>}/>     
 <Route path='*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
