import Header from "../components/Header/Header"
import Layout from "../components/UI/Layout"
import Portfolio from '../components/Portfolio/Portfolio'
import ProfileContext from "../context/profileContext"

const Index = ()=>{
    return (
        <ProfileContext>
            <Layout>
                <Header/>
                <Portfolio/>
            </Layout>
        </ProfileContext>
    )
}

export default Index