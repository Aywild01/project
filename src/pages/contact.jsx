import Titled from '../componets/contacttitle'
import Featured from '../componets/contactfeatures'
import Form from '../componets/contactform'
import Confaq from '../componets/confaq'
import Header from "../componets/header";
import Footer from '../componets/footer'

function Contact(){
    return(
        <div>
            <Header />
            <Titled />
            <Featured />
            <Form />
            <Confaq />
            <Footer />
        </div>
    )
}
export default Contact;