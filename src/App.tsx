import { BrowserRouter,  Route, Routes,  } from 'react-router-dom'
import './App.css'
import CovidHome from './Covid -19/Covidhome';
import Covid from './Covid -19/covid';
import Nav from './Covid -19/Nav';
import Contact from './Covid -19/Contact';
// import Homepage from './Home page/home';
// import VegetableProducts from './Prodects list/products';
// import LoginSignUp from './sample/mylogin';
// import SignUp from "./signup/signup";


function App() {


  return (
    <div className="app">

      {/* <LoginSignUp/> */}
      {/* <SignUp/> */}
      {/* <VegetableProducts/> */}
      {/* <Homepage/> */}
      {/* <Covid/> */}
      {/* < CovidHome/> */}

      <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path='/' element={<Covid/> }/>
          <Route path='/Home' element={ < CovidHome/> }/>
          <Route path='/Contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>

    </div>

  )
}
export default App;
