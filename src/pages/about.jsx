import '../App.css'
import Canvo from '../componets/aboutBackground'
import Title from '../componets/abouthero'
import Story from '../componets/story'
import Value from '../componets/value'

function About() {
    return(
        <div className="Aboutsect">
            <Canvo />
            <Title />
            <Story />
            <Value />
        </div>
    )
}

export default About