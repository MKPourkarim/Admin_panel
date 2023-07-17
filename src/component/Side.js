import '../index.css'
import {Link} from 'react-router-dom'
import { FaUserLarge, FaTableCells, FaUserGear, FaElementor, FaPencil } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import {useState} from 'react'

const Side = () => {
    const [link, setLink] = useState('User');

    const clickHandler = (event) => {
        setLink(event.target.value);
        console.log(link)
    } 

    return(
        <div className='side' onClick={clickHandler}>
            <h1 className='title'>Admin Panel</h1>
            <Link to='/user' className='menu_link'><FaUserLarge />User</Link>
                
                
            <button className='menu_link' value='Table'>   
                    <FaTableCells />
                    <p>Tables</p>
            </button>
            <button className='menu_link' value='Profile'>
                <FaUserGear />
                <p>Profile</p>
            </button>         
            <button className='menu_link' value='Logout'>
                <FaSignOutAlt />
                <p>Logout</p>
            </button>
            <button className='menu_link' value='Uielement'>
                <FaElementor />
                <p>UI Elements</p>
            </button>
            <button className='menu_link' value='Form'>
                <FaPencil />
                <p>Forms</p>
            </button>
            <button className='menu_link' value='Pages'>
                <TbCopy />
                <p>Pages</p>
            </button>     
        </div>
    )
}

export default Side;