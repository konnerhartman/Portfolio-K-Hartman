import React from "react";

function ProjectItem(item) {

  const {
    gif,
    name,
    description,
    link, 
    repo,
  } = item;

  return (
    <div className="card item-card p-2 m-2 d-inline-flex shadow">
      <div>
          <img
            className="card-img-top gallery-img"
            alt={name}
            src={`/images/${gif}`}
          />
        <div className="card-body text-dark ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{link}</p>
          <p className="card-text">{repo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
