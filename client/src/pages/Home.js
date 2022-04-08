import React from "react";
import waveEmoji from '../assets/kh-emoji-wave.png';
import resume from '../assets/K.-Hartman-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="row">
            <div className="col-1 d-none d-sm-block">
            </div>
            <div className="glass col-lg-10 col-md-12 row">
            <div className="col-lg-8">
                <div className="animated-title">
                    <div className="text-top">
                        <div>
                        <span>Konner</span>
                        <span>Hartman</span>
                        </div>
                    </div>
                    <div className="text-bottom">
                        <div>Full Stack Web <span className="dev text-center">&lt;Developer/&gt;</span></div>
                    </div>
                </div>
            </div>
            <aside className="mt-4 col-lg-4 col-sm-12">
                <img className="d-none d-sm-none d-md-block d-lg-block img-fluid pb-2" src={waveEmoji} alt="Emoji of Konner waving his hand."/>
                <div className="text-center">
                    <p>Let's get to business!</p>
                    <div>
                        <button type="button" className="btn homeBtn btn-outline-light">
                            <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href="https://github.com/konnerhartman">
                                <FontAwesomeIcon className="px-2" icon={faGithubAlt} />
                                Github
                            </a>
                        </button>
                        <button type="button" className="btn homeBtn btn-outline-light">
                            <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href="https://www.linkedin.com/in/konner-hartman/">
                                <FontAwesomeIcon className="px-2" icon={faLinkedin} />
                                LinkedIn
                            </a>
                        </button>
                        <button type="button" className="btn homeBtn btn-outline-light">
                            <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href={resume}>
                                <FontAwesomeIcon className="px-2" icon={faFile} />
                                Resume 
                            </a>
                        </button>
                    </div>
                </div>
            </aside>
            </div>
            <div className="col-1 d-none d-sm-block">
            </div>
        </div>
    );
};
    
export default Home;