import {useState} from 'react'
import Header from './Header'
import Main from './Main'
import Side from './Side'
import '../index.css'


const Panel = () => {
    const [headerTitle, setHeaderTitle] = useState('')
    const linkClicked = clickedLinkTitle => {
        console.log(clickedLinkTitle);
    }
    return(
        <div className='panel'>
            <Side onMenuClick={linkClicked}/>
            <Header />
            <Main />            
        </div>
    )
}

export default Panel;