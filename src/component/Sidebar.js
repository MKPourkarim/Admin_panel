import Links from './Links'
import {useState} from 'react'

const Sidebar = () => {
    const sidebar = {

    }

    const hamburger = {

    }

    const [clickedIcon, setClickedIcon] = useState(false)

    const clicked = () => {
        setClickedIcon(!clickedIcon) 
    }
    return(
        <div className={clicked ? sidebar : hamburger}>
            <Links />
        </div>
    )
}

export default Sidebar;