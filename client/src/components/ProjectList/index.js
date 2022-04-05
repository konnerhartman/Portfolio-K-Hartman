import React, { useEffect } from 'react';
import ProjectItem from '../ProjectItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PROJECTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function ProjectList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

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
    if (!currentCategory) {
      return state.projects;
    }

    return state.projects.filter(
      (project) => project.category._id === currentCategory
    );
  }

  return (
    <div className="mt-2 text-center">
      <h2 className='p-2'><span>My Projects</span></h2>
      {state.projects.length ? (
        <div>
          <p>
            For any inquiries about pricing or custom pieces, please feel free to
            <Link className='p-1 text-dark' to="/contact">
              contact me.
            </Link>
          </p>
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
        <h3>I haven't added any projects yet!</h3>
      )}
      {loading ? <FontAwesomeIcon className='spinner' icon={faScrewdriverWrench} /> : null}
    </div>
  );
}

export default ProjectList;
