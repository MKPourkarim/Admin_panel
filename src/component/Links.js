import '../index.css' 
import {Link} from 'react-router-dom'
import { FaUserLarge, FaTableCells, FaUserGear, FaElementor, FaPencil } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";

const Links = () => {
    const clickHandler = (e) => {
        // if (!this.color.includes("clicked")) {
        //     setColor(current => current + "clicked")
        // }
}

    return (
        <div>
            <Link to='/user' className='menu_link' onClick={clickHandler} ><FaUserLarge /><p>User</p></Link>
            <Link to='/profile' className='menu_link' onClick={clickHandler} ><FaUserGear /><p>Profile</p></Link>
            <Link to='/pages' className='menu_link' onClick={clickHandler} ><TbCopy /><p>Pages</p></Link> 
            <Link to='/forms' className='menu_link' onClick={clickHandler} ><FaPencil /><p>Forms</p></Link>
            <Link to='/tables' className='menu_link' onClick={clickHandler} ><FaTableCells /><p>Tables</p></Link>
            <Link to='/uielement' className='menu_link' onClick={clickHandler} ><FaElementor /><p>UI Elements</p></Link>
            <Link to='/logout' className='menu_link' onClick={clickHandler} ><FaSignOutAlt /><p>Logout</p></Link>
        </div>
    )
}

export default Links;