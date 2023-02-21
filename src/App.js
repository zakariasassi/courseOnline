
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Counter from './pages/Counter/Counter';
import Xls from './pages/Xls/Xls';
import Posts from './pages/Posts/Posts';
import Storage from './pages/Storage';
// import Signup from './pages/Signup';

function App() {
  return (
    <>

        <BrowserRouter>
        <Navbar />
             <Routes>
                <Route path='/' element={ <Login /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/signup' element={ <Signup /> } />
                <Route path='/home' element={ <Home /> } />
                <Route path='/counter' element={ <Counter /> } />
                <Route path='/xls' element={ <Xls /> } />
                <Route path='/posts' element={ <Posts /> } />
                <Route path='/storage' element={ <Storage /> } />
            </Routes>
        </BrowserRouter>  
    </>
  );
}

export default App;
