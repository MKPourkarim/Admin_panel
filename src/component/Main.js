import { Route } from 'react-router-dom'
import User from './screens/User'
import User from './screens/UiElement'
import User from './screens/Tables'
import User from './screens/Profile'
import User from './screens/Pages'
import User from './screens/Logout'
import User from './screens/Forms'
import '../index.css'

const Main = () => {
    return(
        <div>
            <Route path="/User">
                <User />
            </Route>        
        </div>
    )
}

export default Main;
