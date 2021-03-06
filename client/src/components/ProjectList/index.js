import React, { useEffect } from 'react';
import ProjectItem from '../ProjectItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PROJECTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';

function ProjectList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_PROJECTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PROJECTS,
        projects: data.projects,
      });
      data.projects.forEach((project) => {
        idbPromise('projects', 'put', project);
      });
    } else if (!loading) {
      idbPromise('projects', 'get').then((projects) => {
        dispatch({
          type: UPDATE_PROJECTS,
          projects: projects,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProjects() {
    
    return state.projects;
  }

  return (
    <div className="row text-center">
      <div className="col-1 d-none d-sm-block">
      </div>
      <div className="glass col-lg-10 col-md-12 row">
        <h2><span>Pr</span>ojects</h2>
        {state.projects.length ? (
          <div>
            {filterProjects().map((project) => (
              <ProjectItem
                key={project._id}
                _id={project._id}
                gif={project.gif}
                name={project.name}
                description={project.description}
                link={project.link}
                repo={project.repo}
              />
            ))}
          </div>
        ) : (
          <h5>These aren't the projects you're looking for...</h5>
        )}
        {loading ? <FontAwesomeIcon icon={faJedi} size='6x' spin /> : null}
      </div>
      <div className="col-1 d-none d-sm-block">
      </div>
    </div>
  );
}

export default ProjectList;
