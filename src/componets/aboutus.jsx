import './about_us.css'



function AboutUs ({
    title, description, image, badge, isReverse
}){
    return (
        <div className="about_us" style={isReverse?{flexDirection: 'row-reverse'}: {}}>
           <div className="info">
            <div className="badge">{badge}</div>
            <p className="title_about" dangerouslySetInnerHTML={{__html: title}} />
            <p className='title_d'
                dangerouslySetInnerHTML={{__html: description}}
            />
           </div>
           <div className="img">
            <img src={image} />
           </div>
        </div>
    )
}

export default AboutUs