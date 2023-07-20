import { Route } from 'react-router-dom'
import '../index.css'

const Header = () => {
    
    return(
        <div className='header'>
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