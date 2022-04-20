import React from "react";
import compEmoji from '../assets/kh-emoji-computer.png'

const Skills = () => {
    return (
        <div className="row">
            <div className="col-1 d-none d-sm-block">
            </div>
            <div className="glass col-lg-10 col-md-12 row">
                <aside className="d-none d-sm-none d-md-block d-lg-block col-lg-4">
                    <img className="img-fluid pt-5" src={compEmoji} alt="Emoji of Konner on his computer."/>
                </aside>
                <div className='col-lg-8 col-md-8 col-sm-12 text-center'>
                    <h2><span>Sk</span>ills</h2>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <h4 className='pb-3'>Front End</h4>
                            <div className='row m-3'>
                                <div className='col-6'>
                                    <div>
                                        <i className="devicon devicon-javascript-plain colored"></i>
                                        <p>JavaScript</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-html5-plain-wordmark colored"></i>
                                        <p>HTML</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-css3-plain colored"></i>
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div>
                                        <i className="devicon devicon-react-original colored"></i>
                                        <p>React</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-jquery-plain colored"></i>
                                        <p>JQuery</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-handlebars-plain"></i>
                                        <p>HandlebarsJS</p>
                                    </div>
                                </div>
                                <div>
                                        <i className="devicon devicon-bootstrap-plain colored"></i>
                                        <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <h4 className='pb-3'>Back End</h4>
                            <div className='row m-3'>
                                <div className='col-6'>
                                    <div>
                                        <i className="devicon devicon-nodejs-plain colored"></i>
                                        <p>NodeJS</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-npm-original-wordmark colored"></i>
                                        <p>NPM</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-express-original"></i>
                                        <p>Express</p>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div>
                                        <i className="devicon devicon-mysql-plain colored"></i>
                                        <p>MySQL</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-sequelize-plain colored"></i>
                                        <p>Sequelize</p>
                                    </div>
                                    <div>
                                        <i className="devicon devicon-mongodb-plain colored"></i>
                                        <p>MongoDB</p>
                                    </div>
                                </div>
                                <div>
                                        <i className="devicon devicon-graphql-plain colored"></i>
                                        <p>GraphQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 d-none d-sm-block">
            </div>
        </div>
    );
};
    
export default Skills;