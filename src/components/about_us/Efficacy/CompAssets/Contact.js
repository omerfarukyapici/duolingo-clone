import '../EfficacyMain.css';

const Contact = () => {
    return(
        <div className="e-Contact flex justify-center">
            <div className="e-Contact-container text-center">
                <p className="text-[#777] text-[17px] " >Have questions ? <a className="e-blue" href="#/efficacy">Contact us</a></p>   
                <div className="flex justify-center pt-8">
                    <a className="e-speak-a" href="#/learn" >START LEARNİNG</a>
                </div>  
            </div>
        </div>
    );
}

export default Contact;