import util from '../../helpers/utils';
import projectCard from '../projectCard/projectCard';

const bio = document.getElementById('bioPage');
const tech = document.getElementById('technologiesPage');
const pro = document.getElementById('projectsPage');

// const printBio = () => {
//   let bioString = '';
//   bioString += '<p> Test </p>';
//   util.printToDom('bioPage', bioString);
// };
// printBio();

const printTech = () => {
  const techString = '<p> Tech Icons</p>';
  util.printToDom('technologiesPage', techString);
};

const linkEvents = (e) => {
  e.preventDefault();
  bio.classList.add('hidden');
  tech.classList.add('hidden');
  pro.classList.add('hidden');
  const linkClicked = e.target.id;
  if (linkClicked === 'navToBio') {
    bio.classList.remove('hidden');
  } else if (linkClicked === 'navToTechnologies') {
    tech.classList.remove('hidden');
    printTech();
  } else if (linkClicked === 'navToProjects') {
    pro.classList.remove('hidden');
    projectCard.createProjectCards();
  }
};

const addClickEvents = () => {
  const myLinks = document.getElementById('navLinks');
  myLinks.addEventListener('click', linkEvents);
};

export default { addClickEvents };
