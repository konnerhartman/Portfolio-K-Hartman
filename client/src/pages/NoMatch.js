import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

const NoMatch = () => {
    return (
        <div className="text-center no-match p-0 pb-3">
            <FontAwesomeIcon className="no-match-header" icon={faGhost} fade />
            <h2 className="no-match-header">GAME OVER!</h2>
            <h4>Whoops! You found a 404 page!
            </h4>
            <h5>Go back and try again.</h5>
            <Link to='/'>
                <button className="btn btn-warning">
                    Return Home
                </button>
            </Link>
        </div>
    );
};
    
export default NoMatch;