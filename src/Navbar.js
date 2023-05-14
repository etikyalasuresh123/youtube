import './Navbar.css';
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ContactUs from './ContactUs';

function Navbar(){

    return (
        <div> 
            <BrowserRouter >
            <div className='block2'> 
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                    <Link to="/ContactUs">Contact US</Link>

                    </div>

                    <Routes>
                        <Route path="/Login" element={<Login></Login>}></Route>
                        <Route path="/Register" element={<Register></Register>}></Route>
                        <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
                    </Routes>
                
            </BrowserRouter>
         
            
        </div>
    )

}

export default Navbar;