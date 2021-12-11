import './contact.css'
import PhoneImg from '../../img/phone.png'
import EmailImg from '../../img/email.png'
import AddressImg from '../../img/address.png'
import { useRef, useState, useContext } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context'



const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const formRef = useRef()
    const [send, setSend] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'hadesgrate',
            'template_xc1v82l',
            formRef.current,
            'user_Uol5ixl8uj6vT2vE1xU7W')
            .then((result) => {
                console.log(result.text);
                setSend(true)
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">My Contact Details are here</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={PhoneImg} alt="" className="c-icon" />
                            +977 9856432121
                        </div>
                        <div className="c-info-item">
                            <img src={EmailImg} alt="" className="c-icon" />
                            manojChutiya@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={AddressImg} alt="" />
                            24 lokenthali,kathmandu Nepal
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input style={{ backgroundColor: darkMode && "#333" }} required type="text" placeholder="Name" name="user_name" id="" />
                        <input style={{ backgroundColor: darkMode && "#333" }} required type="text" placeholder="Subject" name="user_subject" id="" />
                        <input style={{ backgroundColor: darkMode && "#333" }} required type="email" placeholder="Email" name="user_email" id="" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} required minLength="20" placeholder="Message" name="message" rows="5" />
                        <div className="msg">
                            <div className="msg-button"><button className="msg-button">Submit</button></div>
                            <div className="msg-text">{send && "🍻Message Sent!!🍻"}</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact
