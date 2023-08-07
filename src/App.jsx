
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Signuppage from './components/Signuppage';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todolist from './components/TodoList';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Link to='/home'>Home</Link>
      <Link to='/signup'>SignUp</Link>
      <Link to='/login'>Login</Link> 
        <Navbar />
        <Routes>
          <Route element={<Home />} path='home' />
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='login' />
          <Route element={<SignUp />} path='signup' /> 
          <Route element={<EventHandling />} path='event' /> 
          <Route element={<StateManagement />} path='state' /> 
          <Route element={<Todolist />} path='todolist' /> 
          <Route element={<ProductList />} path='list' /> 
          



        </Routes>

      </BrowserRouter>
      {/* <Signuppage /> */}
    </div>
  );
}

export default App;
