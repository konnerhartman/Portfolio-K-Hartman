import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';

function ProjectItem(item) {

  const {
    gif,
    name,
    description,
    link, 
    repo,
  } = item;

  return (
    <div className="d-inline-flex p-2">
      <div className="row">
        <img
          className="project-img col-lg-4"
          alt={name}
          src={`/images/${gif}`}
        />
        <div className="text-dark col-lg-8 project-body">
          <div className="row ">
            <h5 className="card-title col-10">{name}</h5>
            <a className="card-text col-1" target="_blank" rel="noreferrer" href={link}><FontAwesomeIcon icon={faLink} /></a>
            <a className="card-text col-1" target="_blank" rel="noreferrer" href={repo}><FontAwesomeIcon icon={faCode} /></a>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
