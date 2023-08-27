
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todolist from './components/TodoList';
import ProductList from './components/ProductList';
import ChatBox from './components/ChatBox';
import Blog from './components/Blog';
import ManageUser from './components/ManageUser';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './userContext';
import Profile from './components/Profile';



function App() {
  return (
    <div>
      <Toaster position='top-right' />

      <BrowserRouter>
        <UserProvider>

        
        <Navbar />
        <Routes>
          <Route element={<Home />} path='home' />
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='login' />
          <Route element={<SignUp />} path='Signup' />
          
          <Route element={<EventHandling />} path='event' /> 
          <Route element={<StateManagement />} path='state' /> 
          <Route element={<Todolist />} path='todolist' /> 
          <Route element={<ProductList />} path='list' /> 
          <Route element={<ChatBox />} path='chatbox' /> 
          <Route element={<Blog />} path='blog' /> 
          <Route element={<ManageUser />} path='manage' /> 
          <Route element={<UpdateUser />} path='updateuser/:id' /> 
          <Route element={<Profile />} path='profile' /> 
          



        </Routes>
        </UserProvider>

      </BrowserRouter>
      {/* <Signuppage /> */}
    </div>
  );
}

export default App;
