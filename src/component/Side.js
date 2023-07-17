import '../index.css'
import {Link} from 'react-router-dom'
import { FaUserLarge, FaTableCells, FaUserGear, FaElementor, FaPencil } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import {useState} from 'react'

const Side = (props) => {
    const [title, setTitle] = useState('');

    const clickHandler = (e) => {
    setTitle(e.target.text);
    props.onMenuClick(title);
} 

    return(
        <div className='side' >
            <h1 className='title'>Admin Panel</h1>
            <Link to='/user' className='menu_link' onClick={(e)=>clickHandler(e)} ><FaUserLarge />User</Link>
            <Link to='/tables' className='menu_link' onClick={clickHandler} ><FaTableCells />Tables</Link>
            <Link to='/profile' className='menu_link' onClick={clickHandler} ><FaUserGear />Profile</Link>
            <Link to='/logout' className='menu_link' onClick={clickHandler} ><FaSignOutAlt />Logout</Link>
            <Link to='/uielement' className='menu_link' onClick={clickHandler} ><FaElementor />UI Elements</Link>
            <Link to='/forms' className='menu_link' onClick={clickHandler} ><FaPencil />Forms</Link>
            <Link to='/pages' className='menu_link' onClick={clickHandler} ><TbCopy />Pages</Link>  
        </div>
    )
}

export default Side;

