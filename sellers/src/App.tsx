// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Order,
  Test
} from './Routes'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/order' element={<Order />}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



