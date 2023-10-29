import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const [toName, setToName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i0x8weo', 'template_emnz0z3', form.current, '2r54cNfnKIvjZFVxu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Reset form fields
        form.current.reset();
    };

    // Function to reset form fields
    const resetForm = () => {
        setToName('');
        setUserEmail('');
        setMessage('');
    };


    return( <form ref={form} onSubmit={sendEmail}>
        <h1 className= "text-white font-reg text-customFSizeS">Name</h1>
        <input className="form-input text-white"  type="text" name="to_name" />
        <h1 className= "text-black font-reg text-customFSizeS">Name</h1>
        <h1 className= "text-white font-reg text-customFSizeS">Email</h1>
        <input className="form-input text-white" type="email" name="user_email" />
        <h1 className= "text-black font-reg text-customFSizeS">Name</h1>
        <h1 className= "text-white font-reg text-customFSizeS">Message</h1>
        <textarea className="form-input text-white height-500"   name="message" />
        <h1 className= "text-black font-reg text-customFSizeS">Name</h1>
        <input className="form-submit"  type="submit" value="Send" />
      </form>)
}

export default Contact;