import React, {useState} from "react";
import "./styled.scss";
import CInput from "../../components/CInput/CInput";
import { ap } from "../../utils/CIcons";
import emailjs from '@emailjs/browser';

const ContactScreens = ({ id }) => {
  
  const [info, setInfo] = useState({
    name: "",
    subject: "",
    email: "",
    message: ""
  });

const {name, subject, email, message} = info;

  const getMessage= {
    name: name,
    subject: subject,
    email: email,
    message: message
  }
  
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
`${ap.k}`,`${ap.t}`, getMessage, `${ap.p}` )
      .then(() => {
          setInfo({
    name: "",
    subject: "",
    email: "",
    message: ""
          })
      }, (error) => {
          alert(error);
      });
  };
  
  const onHandleMessage = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setInfo({...info, [name]: value});
  }
  
  return (
    <div id={id} className="contact">
      <div className="c-title" data-aos="fade-up">
        <p>
          Calabarzon, <b>Philippines</b>
        </p>
      </div>
      <div className="c-content">
        <div className="c-left">
        <div data-aos="zoom-in-right">
          <span>Silangan, San Mateo, 1850</span>
          <p>mimis.reynaldo22@gmail.com</p>
          </div>
        </div>
        <div className="p-right">
          <div className="row1">
            <CInput hint="Name*" fieldStyle="name" name="name" value={name}
onChange={onHandleMessage}/>
       <CInput hint="Email*" fieldStyle="email" name="email" value={email}
onChange={onHandleMessage}/>
          </div>
          <CInput hint="Subject*" fieldStyle="subject" name="subject" value={subject} onChange={onHandleMessage}
         />
          <div className="m-wrapper"data-aos="fade-down-right">
            <textarea placeholder="Message*" rows="6" maxlength="200" name="message" value={message} onChange={onHandleMessage}/>
          </div>
          <div className="btn" data-aos="zoom-in-right" onClick={sendEmail}>
            <img
              src="https://res.cloudinary.com/dkbbweo5x/image/upload/v1669623853/portfolio-assets/send_heoarh.png"
              alt=""
              className="icon"
            />
            <span>Contact Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreens;
