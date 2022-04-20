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
          <div className="row card-head pt-2">
            <div className="col-1"></div>
            <h5 className="col-8 text-start">{name}</h5>
            <a className="col-1 link" target="_blank" rel="noreferrer" href={link}><FontAwesomeIcon icon={faLink} /></a>
            <a className="col-1 link" target="_blank" rel="noreferrer" href={repo}><FontAwesomeIcon icon={faCode} /></a>
            <div className="col-1"></div>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
