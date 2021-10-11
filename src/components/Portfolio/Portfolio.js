import Card from '../UI/Card'
import PortfolioNav from './PortfolioNav'
import Profile from './Profile'
import { profileCtx } from '../../context/profileContext'
import { useContext } from 'react'
import Security from './Security'

const Portfolio = ()=>{
    const profilectx = useContext(profileCtx)
    return (
        <Card>
            <div className="mx-4 bg-white rounded-t-2xl p-5 flex-col flex items-center shadow-xl">
                <h3 className='text-blue-700 font-bold text-3xl font-serif'>Personal Information</h3>
                <PortfolioNav/>
                {profilectx.status==='profile'&&<Profile/>}
                {profilectx.status==='security'&&<Security/>}
            </div>
        </Card>)
}

export default Portfolio