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
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
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


  const printToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  }

    const createProjectCards = ()=> {
    DoneProjects = projects.filter(donePro => donePro.available === true);  
    // console.log(DoneProjects);
    DoneProjects.forEach((project) => {
    DoneProjects += `<div class="project-card" style="width: 25rem;">`;
    DoneProjects += `<img src="${project.screenshot}" class="card-img-top" alt="project-cards">`;
    DoneProjects += `<div class="card-body">`;
    DoneProjects += `<h5 class="card-title text-center">${project.title}</h5>`;
    DoneProjects += `<p class="card-text text-center">${project.description}.</p>`;
    DoneProjects += `<p class="card-text text-center">${project.technologiesUsed}.</p>`;
    DoneProjects += `<div class='links'>`
    DoneProjects += `<a href="">${project.url}</a>`;
    DoneProjects += `<a href="">${project.githubUrl}</a>`;
    DoneProjects += `</div>`
    DoneProjects += `</div>`;
    DoneProjects += `</div>`;    
  printToDom(DoneProjects,'projectsPage');
  });
}

createProjectCards();


// const startApp = () => {
//   CreateProjectCards();
// };
// startApp();