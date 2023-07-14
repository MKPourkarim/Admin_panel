import Header from './Header'
import Main from './Main'
import Side from './Side'
import '../index.css'

const Panel = () => {
    return(
        <div className='panel'>
            <Header />
            <Main />
            <Side />
        </div>
    )
}

export default Panel;