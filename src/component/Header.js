import { Route } from 'react-router-dom'
import '../index.css'
import {useState} from 'react'
import { BsList } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { FaUserLarge, FaTableCells, FaUserGear, FaElementor, FaPencil } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked(!clicked)
    }

    const SidebarMobile = () => {
        return(
            <div className={clicked ? "sideopen" : "sideopen sideclose"}>
                <Link to='/user' className='menu_link'  onClick={clickHandler}><FaUserLarge /><p>User</p></Link>
                <Link to='/profile' className='menu_link' onClick={clickHandler} ><FaUserGear /><p>Profile</p></Link>
                <Link to='/pages' className='menu_link' onClick={clickHandler} ><TbCopy /><p>Pages</p></Link> 
                <Link to='/forms' className='menu_link' onClick={clickHandler} ><FaPencil /><p>Forms</p></Link>
                <Link to='/tables' className='menu_link' onClick={clickHandler} ><FaTableCells /><p>Tables</p></Link>
                <Link to='/uielement' className='menu_link' onClick={clickHandler} ><FaElementor /><p>UI Elements</p></Link>
                <Link to='/logout' className='menu_link' onClick={clickHandler}  ><FaSignOutAlt /><p>Logout</p></Link>
            </div>
    )
    }

    
    return(
        <div className='header'>
            <BsList className='hamburger' onClick={clickHandler}/>
            <SidebarMobile />
            <Route path="/User">
                <h1 >User</h1>
            </Route>
            <Route path="/UiElement">
                <h1 >UI Element</h1>
            </Route>
            <Route path="/Tables">
                <h1 >Tables</h1>
            </Route>
            <Route path="/Profile">
                <h1 >Profile</h1>
            </Route>
            <Route path="/Pages">
                <h1 >Pages</h1>
            </Route>
            <Route path="/Logout">
                <h1 >Logout</h1>
            </Route>
            <Route path="/Forms">
                <h1 >Forms</h1>
            </Route>    
        </div>
    )
}

export default Header;