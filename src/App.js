import { Route,HashRouter,Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        
    </Routes>
    </HashRouter>
  );
}

export default App;
