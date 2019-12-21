import projectData from '../../helpers/data/projectsData';
import utils from '../../helpers/utils';

import './projectCard.scss';

const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `<div class="card" style="width: 25rem;">
        <img src="${project.screenshot}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a class="card-text" href="${project.url}">${project.url}</a>
          <a class="card-text" href="${project.githubUrl}">${project.githubUrl}</a>
        </div>
      </div>`;
      });
      utils.printToDom('projectsPage', domString);
    });
};

export default { createProjectCards };
