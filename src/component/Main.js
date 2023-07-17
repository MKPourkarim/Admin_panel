import { Route } from 'react-router-dom'
import User from './screens/User'
import UiElement from './screens/UiElement'
import Tables from './screens/Tables'
import Profile from './screens/Profile'
import Pages from './screens/Pages'
import Logout from './screens/Logout'
import Forms from './screens/Forms'
import '../index.css'

const Main = () => {
    return(
        <div className='main'>
            <Route path="/User">
                <User />
            </Route>
            <Route path="/UiElement">
                <UiElement />
            </Route>
            <Route path="/Tables">
                <Tables />
            </Route>
            <Route path="/Profile">
                <Profile />
            </Route>
            <Route path="/Pages">
                <Pages />
            </Route>
            <Route path="/Logout">
                <Logout />
            </Route>
            <Route path="/Forms">
                <Forms />
            </Route>        
        </div>
    )
}

export default Main;
