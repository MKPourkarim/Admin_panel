import Header from './Header'
import Main from './Main'
import Side from './Side'
import '../index.css'

const Panel = () => {
    return(
        <div className='panel'>
            <Side/>
            <Header />
            <Main />            
        </div>
    )
}

export default Panel;