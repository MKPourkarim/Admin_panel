import '../index.css'
import {useState} from 'react'
import Sidebar from './Sidebar'

const Side = (props) => {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');

    const clickHandler = (e) => {
        // if (!this.color.includes("clicked")) {
        //     setColor(current => current + "clicked")
        // }
} 

    return(
        <div className='side' >
            <h1 className='title'>Admin Panel</h1>
            <Sidebar />
        </div>
    )
}

export default Side;

