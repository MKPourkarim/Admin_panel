import '../../index.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Loading from './Loading'
import Table from './Table'

const User = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const Table = () => {
        return( 
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        )
    }

    useEffect( ()=>{
        new Promise(r => setTimeout(r, 500)).then(()=> {
            axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
        });
        
        },[])
    
    return(
        <div className='table_div'>
            {loading ? <Loading className='loadingg'/> :  <Table/>}    
        </div>
    )
}

export default User;