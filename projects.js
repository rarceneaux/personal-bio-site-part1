const bio = document.getElementById('bioPage');
const tech = document.getElementById('technologiesPage');
const pro = document.getElementById('projectsPage');


let projects = [
  {
    title: "Product Cards", 
    screenshot: "images/ProductCards.png", 
    description: "This project is a simple example of a static website containing product cards hard coded to display on the page using Flexbox", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Flexbox, Version Control with Github",
    available: true,
    url: "https://rarceneaux.github.io/product-cards/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://rarceneaux.github.io/product-cards/"
  },
  {
    title: "Pet Adoption", 
    screenshot: "images/PetAdoption.png", 
    description: "This project is a simple example of event listeners on the pet buttons. The functionality of this project is the ability to filter the pets array down to the selected pet on the click event.", // A good projectject description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Flexbox, Version Control with Github",
    available: true,
    url: "https://rarceneaux.github.io/pet-adoption/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://rarceneaux.github.io/pet-adoption/"
  },
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }];

  // {
  //   title: "", 
  //   screenshot: "", 
  //   description: "", // A good projectject description includes 'the what', 'the why', and 'the how'.
  //   technologiesUsed: "",
  //   available: true,
  //   url: "", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  //   githubUrl: ""
  // }

  const printToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  }

    const printBio = () => {
      bioString = `<h1> NO CONTENT YET BIO</h1>`;
    printToDom(bioString,'bioPage');
    };
    printBio();

    const printTech = () => {
      techString = `<h1> NO CONTENT YET TECH</h1>`;
    printToDom(techString,'technologiesPage');
    };
    
// event listener to call createProject cards
    const createProjectCards = ()=> {
    doneString = '';  
    DoneProjects = projects.filter(donePro => donePro.available === true);  
    DoneProjects.forEach((project) => {
    doneString += `<div class="project-card" style="width: 25rem;">`;
    doneString += `<img src="${project.screenshot}" class="card-img-top" alt="project-cards">`;
    doneString += `<div class="card-body">`;
    doneString += `<h5 class="card-title text-center">${project.title}</h5>`;
    doneString += `<p class="card-text text-center">${project.description}.</p>`;
    doneString += `<p class="card-text text-center">${project.technologiesUsed}.</p>`;
    doneString += `<div class='links'>`
    doneString += `<a class='rlinks' href="">${project.url}</a>`;
    doneString += `<a class='rlinks' href="">${project.githubUrl}</a>`;
    doneString += `</div>`
    doneString += `</div>`;
    doneString += `</div>`;   
  printToDom(doneString,'projectsPage');
  });
};



const linkEvents = (e) => {
  e.preventDefault();
  const linkClicked = e.target.id;
  if(linkClicked === 'navToBio'){
    bio.classList.remove('hidden');
    tech.classList.add('hidden');
    pro.classList.add('hidden');
  } else if (linkClicked === 'navToTechnologies') {
    bio.classList.add('hidden');
    pro.classList.add('hidden');
    tech.classList.remove('hidden');
    printTech();
  } else {
    (linkClicked === 'navToProjects');
    tech.classList.add('hidden');
    bio.classList.add('hidden');
    pro.classList.remove('hidden');
    createProjectCards();
  }
} 

const myLinks = document.getElementById('navLinks');
myLinks.addEventListener('click',linkEvents);

