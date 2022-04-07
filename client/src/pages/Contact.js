import React from 'react';
import emailjs from '@emailjs/browser';
import ProfPic from '../assets/Prof-Pic-Square.jpg'
import resume from '../assets/K.-Hartman-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMobileAlt, faFileInvoice  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_om2iykm', 'template_aiuu4mi', e.target, 'ZsgJRrqRvzI3jIWyw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="row">
        <div className="col-1 d-none d-sm-block">
        </div>
        <div className="glass col-lg-10 col-md-12 row p-2">
            <h2 className='text-center'>Reach Out</h2>
            <div className='col-md-5 d-none d-sm-block'>
                <img className="prof-pic rounded-circle" src={ProfPic} alt="Konner sitting infront of his desk with a big smile on his face!."/>
            </div>
            <div className="col-md-7 col-sm-12">
                <div className='col-12 row text-center'>
                    <a className='contact col-3' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konner-hartman/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className='contact col-3' target="_blank" rel="noreferrer" href="https://github.com/konnerhartman"><FontAwesomeIcon icon={faGithubAlt} /></a>
                    <a className='contact col-3' href="tel:214-226-4278"><FontAwesomeIcon icon={faMobileAlt} /></a>
                    <a className='contact col-3' href={resume}><FontAwesomeIcon icon={faFileInvoice} /></a>
                </div>
                <form className='py-2' onSubmit={sendEmail} id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <p className='text-center'>-Send Me An Email-</p>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="name" name="name" className="form-control" required />
                                <label className="">Your name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="email" name="email" className="form-control" required />
                                <label className="">Your email</label>
                            </div>
                        </div>
                    </div>
                    <div className="row  mb-3">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <input type="text" id="subject" name="subject" className="form-control" required />
                                <label className="">Subject</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form">
                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" required></textarea>
                                <label>Your message</label>
                            </div>
                        </div>
                        <div className='text-end'>
                            <button className='btn btn-secondary px-4' type="submit">
                                Send <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-1 d-none d-sm-block">
        </div>
    </div>
  );
};

export default Contact;
