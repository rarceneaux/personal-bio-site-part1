let projects = [
  {
    title: "Product Cards", 
    screenshot: "images/ProductCards.png", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
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
    let projectsString = '';
    projects.forEach((project) => {
    projectsString += `<div class="project-card" style="width: 25rem;">`;
    projectsString += `<img src="${project.screenshot}" class="card-img-top" alt="project-cards">`;
    projectsString += `<div class="card-body">`;
    projectsString += `<h5 class="card-title text-center">${project.title}</h5>`;
    projectsString += `<p class="card-text text-center">${project.description}.</p>`;
    projectsString += `<p class="card-text text-center">${project.technologiesUsed}.</p>`;
    projectsString += `<div class='links'>`
    projectsString += `<a href="">${project.url}</a>`;
    projectsString += `<a href="">${project.githubUrl}</a>`;
    projectsString += `</div>`
    projectsString += `</div>`;
    projectsString += `</div>`;    
  printToDom(projectsString,'projectsPage');
  });
}
createProjectCards();