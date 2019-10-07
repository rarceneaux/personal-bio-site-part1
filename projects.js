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
    url: "https://rarceneaux.github.io/product-cards/", // Towards the latter part ofhttps://rarceneaux.github.io/product-cards/ the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
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
    title: "Sorting Hat", 
    screenshot: "images/Sorting-Hat.png", 
    description: "This project is a example of adding an student to one of the four houses at Hogwarts. ", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, JavaScript, Bootstrap 4 Version Control with Github",
    available: true,
    url: "https://rarceneaux.github.io/Sorting-Hat-e10/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: " https://rarceneaux.github.io/Sorting-Hat-e10/"
  },
  {
    title: "Temperature Converter",
    screenshot: "images/temp-converter.png",
    description: "This project is a simple Celsius/Fahrenheit Converter.",
    technologiesUsed:"HTML, CSS, JavaScript, Bootstrap 4 Version Control with Github",
    available: true,
    url:"https://rarceneaux.github.io/temperature-converter/",
    githubUrl:"https://rarceneaux.github.io/temperature-converter/"
  },
  {
  title: "Sandwich Maker",
    screenshot: "images/sandwich.png",
    description: "The sandwich maker project displays the selection of the user, the ability to review, and complete order their order.",
    technologiesUsed:"HTML, CSS, JavaScript, Bootstrap 4 Version Control with Github",
    available: true,
    url:"https://rarceneaux.github.io/sandwich-maker/",
    githubUrl:"https://rarceneaux.github.io/sandwich-maker/"
  },
  {
  title: "Tamagotchi",
  screenshot: "images/Tamagotchi.png",
  description: "This application is a less realistic remake of the mid-ninties fad Tamagotchi.",
  technologiesUsed:"HTML, CSS, JavaScript",
  available: true,
  url:"https://rarceneaux.github.io/Tamagotchi/",
  githubUrl:"https://rarceneaux.github.io/Tamagotchi/"
  },
];

  const printToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  }

    const printBio = () => {
      bioString = `<img src="images/me.png" class="bio" width='300px'alt="">`;
      bioString += `<p></p>`;
    printToDom(bioString,'bioPage');
    };
    printBio();

    const printTech = () => {
      techString = `<p></p>`;
    printToDom(techString,'technologiesPage');
    };

    const createProjectCards = ()=> {
    doneString = '';  
    DoneProjects = projects.filter(donePro => donePro.available === true);  
    DoneProjects.forEach((project) => {
    doneString += `<div class="card" style="width: 25rem;">
    <img src="${project.screenshot}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <a class="card-text" href="${project.url}">${project.url}</a>
      <a class="card-text" href="${project.githubUrl}">${project.githubUrl}</a>
    </div>
  </div>`; 
  printToDom(doneString,'projectsPage');
  });
};


 const linkEvents = (e) => {
  e.preventDefault();
  bio.classList.add('hidden');
  tech.classList.add('hidden');
  pro.classList.add('hidden');
  const linkClicked = e.target.id;
  if(linkClicked === 'navToBio'){
    bio.classList.remove('hidden');
  } else if (linkClicked === 'navToTechnologies') {
    tech.classList.remove('hidden');
    printTech();
  } else  if (linkClicked === 'navToProjects'){      
    pro.classList.remove('hidden');
    createProjectCards();
  }
}; 


const myLinks = document.getElementById('navLinks');
myLinks.addEventListener('click',linkEvents);

