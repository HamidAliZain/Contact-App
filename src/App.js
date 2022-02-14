import logo from './logo.svg';
import './App.css';
import { ToastContainer } from "react-toastify"
import { Navbar } from './Component/nav';
import { Link, Route, Routes } from 'react-router-dom';
import { Edit } from './Component/edit';
import { Home } from './Component/home';
import { Addcontact } from './Component/Addcomponent';
function App() {
  return (
    <>
      <div className='App'>
        <ToastContainer />
        <Navbar />

        <Routes>
        <Route exact path="/*" element={<Home />} />
          <Route exact path="/add" element={<Addcontact />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
     
      </div>
    </>
  );
}

export default App;
