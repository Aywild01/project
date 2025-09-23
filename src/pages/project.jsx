import Projhead from "../componets/projheading"
import Pcard from "../componets/projcard"
import ContactBanner from "../componets/contactbanner"
import Header from "../componets/header";
import Footer from '../componets/footer'

function Project(){
    return(
        <div>
            <Header />
            <Projhead />
            <Pcard />
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default Project