import React from "react";
import { Link } from "react-router-dom";
import smileEmoji from '../assets/kh-emoji-smile.png';
import resume from '../assets/K.-Hartman-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="row">
            <div className="col-1 d-none d-sm-block">
            </div>
            <div className="glass col-lg-10 col-md-12 row">
                <aside className="col-lg-4">
                    <img className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block img-fluid" src={smileEmoji} alt="Emoji of Konner smiling."/>
                </aside>
                <div className="text-center col-lg-8">
                    <h2><span>Ab</span>out Me</h2>
                    <div>
                        <p className='mt-4'>Constantly learning and loving every second of it.</p>
                        <p className='m-4'>Being comfortable with discomfort is one of my greatest traits. I am a Full Stack Web Developer with an emphasis on the MERN stack, holding a Bachelor of Science From Texas A&M University. I recently received a certificate in Full Stack Development from Southern Methodist University, where I developed <Link className="link text-decoration-none" to='/skills'>skills</Link> in JavaScript, MySQL, MongoDB, NodeJS, React.js, and more.</p>
                        <button type="button" className="btn btn-outline-light">
                            <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href={resume}>
                                <FontAwesomeIcon className="px-2" icon={faFile} />
                                Resume 
                            </a>                        
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-1 d-none d-sm-block">
            </div>
        </div>
    );
};
    
export default About;