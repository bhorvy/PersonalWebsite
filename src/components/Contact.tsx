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
         <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style-2" style={{ minWidth: '70vh' }}>
            <h2>Contact Me</h2>
            <label>Name</label>
            <input value={name}  onChange={e => setName(e.target.value)} type="text" name="name" />
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="user_email" />
            <label>Message</label>
            <textarea value={message}  onChange={e => setMessage(e.target.value)} name="message" />
            <input type="submit" value="Send" />
         </div>
    </form>
  </div>

  );
}

export default Contact;
