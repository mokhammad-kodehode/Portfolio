// Define the projects using an array of objects

const projects = [
  {
    title: "Planet project",
    languages: "HTML  CSS",
    description:
      "The Saturn Information Website is a group project I developed for my portfolio, showcasing my proficiency in HTML and CSS. This website serves as a comprehensive resource dedicated to providing insightful information about Saturn, the sixth planet from the Sun in our solar system.",
    imageSrc: "Images/Planet.png",
    iframeSrc:
      "https://kristian-kodehode.github.io/005-Gruppeprosjekt-Saturn-Mokhammad-Kristian/",
    gitLink: "https://github.com/mokhammad-kodehode/Age-calculator.git",
    pageSrc:
      "https://kristian-kodehode.github.io/005-Gruppeprosjekt-Saturn-Mokhammad-Kristian/",
  },
  {
    title: "Car rental Marketplace",
    languages: "MERN-STACK",
    description:
      "The MERN Stack Car Rental Marketplace is a dynamic web application designed to facilitate the seamless sharing of cars among users. This project showcases my proficiency in utilizing the MERN (MongoDB, Express.js, React, and Node.js) technology stack to create a user-friendly and efficient solution for car rental and sharing.",
    imageSrc: "Images/car.jpg",
    iframeSrc: "https://github.com/mokhammad-kodehode/rentCarServer.git",
    gitLink: "https://github.com/mokhammad-kodehode/RentCarMarket.git",
    pageSrc: "https://github.com/mokhammad-kodehode/rentCarServer.git",
  },
  {
    title: "ReNoise",
    languages: "REACT TypeScript",
    description:
      "ReNoise is an interactive web application designed by me to provide users with the opportunity to immerse themselves in the soothing sounds of nature. The project is developed using modern web technologies and frameworks, ensuring a pleasant and intuitive user experience.",
    imageSrc: "Images/reNoiseTwo.png",
    iframeSrc: "https://mokhammad-kodehode.github.io/ReNoiseTwo/",
    gitLink: "https://github.com/mokhammad-kodehode/ReNoiseTwo.git",
    pageSrc: "https://mokhammad-kodehode.github.io/ReNoiseTwo/",
  },
  {
    title: "Password generator",
    languages: "HTML  CSS JavaScript",
    description:
      "The Password Generator is a project I developed to showcase my programming skills and provide a practical utility for generating strong and secure passwords. This project demonstrates my proficiency in web development, specifically using HTML, CSS, and JavaScript.",
    imageSrc: "Images/pass.jpg",
    iframeSrc: "https://mokhammad-kodehode.github.io/Password-generator-main/",
    gitLink:
      "https://github.com/mokhammad-kodehode/Password-generator-main.git",
    pageSrc: "https://mokhammad-kodehode.github.io/Password-generator-main/",
  },
  {
    title: "Age calculator",
    languages: "HTML  CSS JavaScript",
    description:
      "The Age Calculator is a powerful and user-friendly tool designed to effortlessly calculate your age based on your birthdate. Whether you're curious about your current age or need to determine the age of someone else, this handy calculator provides accurate results within seconds.",
    imageSrc: "Images/Age.jpg",
    iframeSrc:
      "https://mokhammad-kodehode.github.io/Age-calculator-main/Age-calculator-main/",
    gitLink: "",
    pageSrc:
      "https://mokhammad-kodehode.github.io/Age-calculator-main/Age-calculator-main/",
  },
  {
    title: "The Weather App",
    languages: "HTML  CSS JavaScript",
    description:
      "The Weather App is a web application that allows users to fetch current weather data for a specific city. The app utilizes an open API to retrieve weather information. Users can enter the name of a city in the search field, and the app will display details such as the current temperature, weather conditions, wind speed, humidity,and other relevant data.",
    imageSrc: "Images/Weather.png",
    iframeSrc: "https://mokhammad-kodehode.github.io/Weather-forcast/",
    gitLink: "https://mokhammad-kodehode.github.io/calculator/",
    pageSrc: "https://mokhammad-kodehode.github.io/Weather-forcast/",
  },
];

const projectsTwo = [
  {
    title: "Calculator",
    languages: "React",
    description:
      "The Calculator App is a web application that provides a simpleand user-friendly interface for performing basic arithmeticoperations. The app allows users to perform addition, subtraction, multiplication, division,and percentage calculations with ease.The project was built using React,a popular JavaScript library for building user interfaces.",
    imageSrc: "Images/Calculator.jpg",
    iframeSrc: "https://mokhammad-kodehode.github.io/calculator/",
    gitLink: "https://github.com/mokhammad-kodehode/calculator.git",
    pageSrc: "https://mokhammad-kodehode.github.io/calculator/",
  },

  {
    title: "Drum Kit",
    languages: "HTML CSS JavaScript",
    description:
      "The DRUMkit project is an interactive web application created using HTML, CSS, and JavaScript. It offers a virtual drum kit that allows users to play various drum sounds both by clicking corresponding buttons on the screen and using keyboard keys.",
    imageSrc: "Images/Drum.png",
    iframeSrc: "https://mokhammad-kodehode.github.io/DrumKitnew/",
    gitLink: "https://github.com/mokhammad-kodehode/DrumKitnew.git",
    pageSrc: "https://mokhammad-kodehode.github.io/DrumKitnew/",
  },
  {
    title: "Unit Converter",
    languages: ["HTML   CSS   JavaScript"],
    description:
      "The 'Unit Converter' project is a web application that allows users to convert between different units of measurement. It provides a simple and intuitive interface for converting values from one unit to another, making it convenient for various conversion needs.",
    imageSrc: "Images/Unit.jpg",
    iframeSrc: "https://mokhammad-kodehode.github.io/Unit-converter/",
    pageSrc: "https://mokhammad-kodehode.github.io/Unit-converter/",
  },
  {
    title: "Relax Sounds",
    languages: "HTML CSS JavaScript",
    description:
      "ReNoise is an interactive web application designed by me to provide users with the opportunity to immerse themselves in the soothing sounds of nature. The project is developed using modern web technologies and frameworks, ensuring a pleasant and intuitive user experience.",
    imageSrc: "Images/ReNoise.jpg",
    iframeSrc: "https://mokhammad-kodehode.github.io/ReNoise/",
    gitLink: "https://github.com/mokhammad-kodehode/ReNoise.git",
    pageSrc: "https://mokhammad-kodehode.github.io/ReNoise/",
  },
  {
    title: "Mars Rover",
    languages: "HTML CSS JavaScript",
    description:
      "The Mars Rover Exploration Viewer is an interactive web application that I developed, leveraging API (Application Programming Interface) integration to fetch and display real-time images captured by various Mars rovers. This project is a testament to my skills in web development and API utilization, offering users a visually engaging experience of exploring the Martian landscape through the eyes of rovers.",
    imageSrc: "Images/Mars.png",
    iframeSrc: "https://mokhammad-kodehode.github.io/marsrover/",
    gitLink: "https://github.com/mokhammad-kodehode/marsrover.git",
    pageSrc: "https://mokhammad-kodehode.github.io/marsrover/",
  },
];

// Get references to various DOM elements

const body = document.body;
const themeSwitcher = document.getElementById("theme-switch-checkbox");
const projectsOne = document.querySelector(".projects");
const projectsTwoContainer = document.querySelector(".projects-two");
const projectsBtnOne = document.getElementById("show_one");
const projectsBtnTwo = document.getElementById("show_two");
const projectsBtnOneResp = document.getElementById("show_one_resp");
const projectsBtnTwoResp = document.getElementById("show_two_resp");
const right = document.querySelector(".right_arrow");
const left = document.querySelector(".left_arrow");
const navbarItems = document.querySelectorAll(".navbar_item");
const activateItem = document.getElementById("active_one");

// Handle mouseenter and mouseleave events for navbar items

navbarItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (item !== activateItem) {
      activateItem.classList.remove("active");
    }
  });

  item.addEventListener("mouseleave", () => {
    activateItem.classList.add("active");
  });
});

// Handle clicking the right arrow to switch to projectsTwo

right.addEventListener("click", () => {
  projectsOne.style.display = "none";
  projectsTwoContainer.style.display = "grid";
  left.style.display = "block";
  right.style.display = "none";
  projectsBtnTwo.classList.add("active");
  projectsBtnOne.classList.remove("active");
});

// Handle clicking the left arrow to switch back to projectsOne

left.addEventListener("click", () => {
  projectsOne.style.display = "grid";
  projectsTwoContainer.style.display = "none";
  left.style.display = "none";
  right.style.display = "block";
  projectsBtnOne.classList.add("active");
  projectsBtnTwo.classList.remove("active");
});

projectsBtnOneResp.classList.add("active");
projectsBtnOne.classList.add("active");

// Handle clicking the "Show Projects One" button

projectsBtnOne.addEventListener("click", () => {
  left.style.display = "none";
  right.style.display = "block";
  projectsOne.style.display = "grid";
  projectsTwoContainer.style.display = "none";
  projectsBtnOne.classList.add("active");
  projectsBtnTwo.classList.remove("active");
});

// Handle clicking the "Show Projects Two" button

projectsBtnTwo.addEventListener("click", () => {
  left.style.display = "block";
  right.style.display = "none";
  projectsTwoContainer.style.display = "grid";
  projectsOne.style.display = "none";
  projectsBtnTwo.classList.add("active");
  projectsBtnOne.classList.remove("active");
});

// Handle clicking the "Show Projects One respositive" button

projectsBtnOneResp.addEventListener("click", () => {
  projectsOne.style.display = "flex";
  projectsTwoContainer.style.display = "none";
  projectsBtnOneResp.classList.add("active");
  projectsBtnTwoResp.classList.remove("active");
});

// Handle clicking the "Show Projects One respositive" button

projectsBtnTwoResp.addEventListener("click", () => {
  projectsTwoContainer.style.display = "flex";
  projectsOne.style.display = "none";
  projectsBtnTwoResp.classList.add("active");
  projectsBtnOneResp.classList.remove("active");
});

// fuction to create a link

const createLink = (text, href, target, title) => {
  const link = document.createElement("a");
  link.textContent = text;
  link.href = href;
  link.target = target;
  if (title) {
    link.title = title;
  }
  return link;
};

// fuction to create a image

const createImage = (src, alt) => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  return image;
};

// fuction to create a project card

const createProjectCard = (project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.setAttribute(
    "data-tooltip",
    "Click on a project for more information"
  );

  let button;
  let btnClose;
  let isIframeExpanded = false;

  const projectImage = document.createElement("img");
  projectImage.className = "project-img";
  projectImage.src = project.imageSrc;
  projectImage.alt = project.title;
  projectCard.appendChild(projectImage);

  const projectDesc = document.createElement("div");
  projectDesc.className = "project-desc";

  projectCard.appendChild(projectDesc);

  const projectTitle = document.createElement("h2");
  projectTitle.className = "project-title";
  projectTitle.textContent = project.title;
  projectDesc.appendChild(projectTitle);

  const parag = document.createElement("p");
  parag.textContent = project.description;
  projectDesc.appendChild(parag);

  const footer = document.createElement("div");
  footer.className = "footer";
  projectDesc.appendChild(footer);

  const languagesContainer = document.createElement("ul");
  footer.appendChild(languagesContainer);

  const links = document.createElement("div");
  links.className = "links";
  footer.appendChild(links);

  const visit = createLink("Visit page", project.pageSrc, "_blank");
  visit.className = "visit";
  links.appendChild(visit);

  const visitIcon = document.createElement("i");
  visitIcon.className = "fa-solid fa-up-right-from-square";
  visit.appendChild(document.createTextNode(" "));
  visit.appendChild(visitIcon);

  const gitLink = createLink(
    "",
    project.gitLink,
    "_blank",
    "Link to GitHub page"
  );
  gitLink.className = "icon-git";

  const gitIcon = document.createElement("i");
  gitIcon.className = "fa-brands fa-github";
  gitLink.appendChild(gitIcon);

  links.appendChild(gitLink);

  const languagess = document.createElement("li");
  languagess.textContent = project.languages;
  languagess.className = "lang";
  languagesContainer.appendChild(languagess);

  const iframeContainer = document.createElement("div");
  iframeContainer.className = "iframe-container";
  projectCard.appendChild(iframeContainer);

  const iframeWrap = document.createElement("div");
  iframeWrap.className = "iframe-wrapper";
  iframeContainer.appendChild(iframeWrap);

  const iframe = document.createElement("iframe");
  iframe.src = project.iframeSrc;
  iframeWrap.appendChild(iframe);

  projectCard.addEventListener("click", () => {
    projectDesc.classList.toggle("expanded");
    projectCard.classList.toggle("expanded");
    parag.classList.toggle("expanded");

    const isExpanded = projectCard.classList.contains("expanded");
    const isFromSecondArray =
      projectCard.parentElement === projectsTwoContainer;

    left.style.display = isFromSecondArray
      ? isExpanded
        ? "none"
        : "block"
      : "none";
    right.style.display = isFromSecondArray
      ? "none"
      : isExpanded
      ? "none"
      : "block";
    projectsBtnOne.style.display = isExpanded ? "none" : "block";
    projectsBtnTwo.style.display = isExpanded ? "none" : "block";

    projectsOne.style.overflow =
      projectsOne.style.overflow === "hidden" ? "auto" : "hidden";

    if (!button) {
      button = document.createElement("button");
      button.textContent = "Preview";
      button.classList.add("btn-primary");
      footer.appendChild(button);

      button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (isIframeExpanded) {
          iframe.classList.remove("expanded-iframe");
          iframeContainer.classList.remove("expanded");
          btnClose.remove();
          isIframeExpanded = false;
        } else {
          iframe.classList.add("expanded-iframe");
          btnClose = document.createElement("button");
          btnClose.textContent = "X";
          btnClose.classList.add("btn-close");
          iframeContainer.appendChild(btnClose);
          isIframeExpanded = true;

          btnClose.addEventListener("click", (event) => {
            event.stopPropagation();
            iframe.classList.remove("expanded-iframe");
            iframeContainer.classList.remove("expanded");
            btnClose.remove();
            isIframeExpanded = false;
          });
        }

        iframeContainer.classList.toggle("expanded");
      });
    } else {
      button.remove();
      button = null;
      btnClose = null;
      isIframeExpanded = false;
    }
  });

  return projectCard;
};

// Function to add project cards to a container

const addProjectsToContainer = (projects, container) => {
  projects.forEach((project) => {
    const projectElement = createProjectCard(project);
    container.appendChild(projectElement);
  });
};

addProjectsToContainer(projects, projectsOne);
addProjectsToContainer(projectsTwo, projectsTwoContainer);

// Handle theme switcher change event

themeSwitcher.addEventListener("change", () => {
  body.classList.toggle("light-theme", themeSwitcher.checked);

  const isLightTheme = themeSwitcher.checked;
  localStorage.setItem("theme", isLightTheme ? "light" : "default");
});

// Load saved theme preference from localStorage

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeSwitcher.checked = true;
}

// Function to toggle the navigation menu

function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  const bars = document.querySelectorAll(".bar");
  const orangeColorRGB = "rgb(254, 195, 66)";

  Array.from(bars).forEach((bar) => {
    const computedStyle = window.getComputedStyle(bar);
    const backgroundColor = computedStyle.backgroundColor;

    bar.style.backgroundColor =
      backgroundColor === orangeColorRGB ? "white" : "#FEC342";
  });

  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

paper.install(window);

// Get a reference to the canvas object
const canvas = document.getElementById("myCanvas");

// Create an empty project and a view for the canvas:
paper.setup(canvas);

window.onload = function () {
  const h = window.innerHeight;
  const w = window.innerWidth;
  const halfH = h * 0.3;
  const speed = 0.09;
  const strokeWidth = 55;
  const frequency = 4;
  const pathCount = 8;

  const pathPoints = 10;
  const pathColors = [
    "rgba(85, 80, 129, 1)",
    "rgba(255, 255, 255, 0.5)",
    "rgba(85, 80, 129, 0.5)",
    "rgba(255, 255, 255, 1)",
    "rgba(85, 80, 129, 0.5)",
    "rgba(183, 36, 92, 0.5)",
    "rgba(255, 255, 255, 0.5)",
    "rgba(85, 80, 129, 0.5)",
    "rgba(255, 255, 255, 0.5)",
    "rgba(85, 80, 129, 0.5)",
  ];

  const path = [];

  const offsetRandom = 2;
  const randomOffsets = [];
  const maxDistRandom = 3;
  const randomDistances = [];
  const randomHeights = [];

  const magnitued = 0.1;

  for (let i = 0; i < pathCount; i++) {
    randomOffsets[i] = Math.random() * offsetRandom;
    randomDistances[i] = Math.random() * maxDistRandom;

    randomHeights[i] = Math.max(Math.random() + 0.9, 0.5);
    // Create a Paper.js Path to draw a line into it:
    path[i] = new paper.Path();
    path[i].lineCap = "round";
    // Give the stroke a color

    path[i].strokeColor = pathColors[i];
    // path[i].strokeColor = new paper.Color(
    //   Math.floor(Math.random() * 255),
    //   Math.floor(Math.random() * 255),
    //   Math.floor(Math.random() * 255)
    // );
    path[i].strokeWidth = strokeWidth * randomDistances[i];

    for (let v = 0; v < pathPoints; v++) {
      path[i].add(new paper.Point(w * (v / (pathPoints - 1)), halfH));
    }
    //	path.smooth();
  }

  // Draw the view now:
  //paper.view.draw();
  view.onFrame = function (event) {
    for (let p = 0; p < path.length; p++) {
      // Loop through the segments of the path:
      for (let i = 0; i < pathPoints; i++) {
        const segment = path[p].segments[i];

        // A cylic value between -1 and 1
        const sinus = Math.sin(
          event.time * speed +
            (i / pathPoints) * frequency * randomHeights[p] +
            randomOffsets[p]
        );

        // Change the y position of the segment point:
        segment.point.y = halfH + sinus * (h * magnitued);
      }
      path[p].smooth();
    }
  };
};
