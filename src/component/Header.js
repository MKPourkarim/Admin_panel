import {useEffect, useState} from 'react'
import axios from 'axios'
import '../index.css'

const Header = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    
    return(
        <h className='header'>Header</h>
    )
}

export default Header;