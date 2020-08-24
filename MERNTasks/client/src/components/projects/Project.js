import React from 'react';

const Project = ({project}) => {
    return (
        <li key = {project.projectName}>

            <button  
                type="button"
                 className="btn btn-blank">
                {project.projectName} 
            </button>
        </li>
    );

}

export default Project