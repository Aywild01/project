import '../App.css'
import Canvo from '../componets/aboutBackground'
import Title from '../componets/abouthero'
import Story from '../componets/story'
import Value from '../componets/value'
import Header from "../componets/header";
import Footer from '../componets/footer'

function About() {
    return(
        <div className="Aboutsect">
            <Header />
            <Canvo />
            <Title />
            <Story />
            <Value />
            <Footer />
        </div>
    )
}

export default About