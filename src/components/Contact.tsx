import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

function Contact() {

  const form = useRef(null!);
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")

  const sendEmail = (e : any) => {
  e.preventDefault();

  setName("")
  setEmail("")
  setMessage("")

  emailjs
      .sendForm('service_yticz8b', 'template_798uivg', form.current, {
        publicKey: '674y7Unhr9dUumU2a',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error : any) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <div className="w-100 d-flex flex-column align-items-center justify-content-center">    
    <form ref={form} onSubmit={sendEmail}>
         <div className="col-lg-2 d-flex flex-column div-style-2" style={{ minWidth: '70vh' }}>
          <div  className="m-3">
            <h2 className='mb-3 text-center' data-usal="text-fluid split-letter duration-1750 split-delay-75">Contact Me</h2>
            <label className="form-label"><b>Name:</b></label>
            <input value={name}  placeholder="Please Enter Your Name" className="form-control" onChange={e => setName(e.target.value)} type="text" name="name" />
            </div> 
            <div  className="m-3">
            <label  className="form-label"><b>Email:</b></label>
            <input type="email" placeholder="Please Enter Your Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} name="email" />
            </div>
            <div  className="m-3">
            <label  className="form-label"><b>Message:</b></label>
            <textarea value={message}  placeholder="Please Enter Your Message" className="form-control" onChange={e => setMessage(e.target.value)} name="message" />
            </div>
            <button className="btn btn-light btn-lg m-3" type="submit" value="Send" >Send</button>
         </div>
    </form>
  </div>

  );
}

export default Contact;
