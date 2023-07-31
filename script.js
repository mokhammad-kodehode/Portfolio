// Finish slider and hover , create arrows for slider.

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

const projectCards = Array.from(document.querySelectorAll(".project-card"));

projectCards.forEach((card) => {
  const iframeContainer = card.querySelector(".iframe-container");
  const footer = card.querySelector(".footer");
  const iframe = iframeContainer.querySelector("iframe");

  //creating evenlist for each projectcard
  card.addEventListener("click", () => {
    const parag = card.querySelector("p");
    const projectDesc = card.querySelector(".project-desc");

    let button = card.querySelector(".btn-primary");
    let btnClose = card.querySelector(".btn-close");

    projectDesc.classList.toggle("expanded");
    card.classList.toggle("expanded");
    parag.classList.toggle("expanded");

    const projectsContainer = document.querySelector(".projects");
    projectsContainer.style.overflow =
      projectsContainer.style.overflow === "hidden" ? "auto" : "hidden";

    if (!button) {
      button = document.createElement("button");
      button.textContent = "Preview";
      button.classList.add("btn-primary");
      footer.appendChild(button);

      button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (!iframeContainer.classList.contains("expanded")) {
          iframe.classList.add("expanded-iframe");

          btnClose = document.createElement("button");
          btnClose.textContent = "X";
          btnClose.classList.add("btn-close");
          iframeContainer.appendChild(btnClose);

          btnClose.addEventListener("click", (event) => {
            event.stopPropagation();
            iframe.classList.remove("expanded-iframe");
            iframeContainer.classList.remove("expanded");
            btnClose.remove();
          });
        } else {
          iframe.classList.remove("expanded-iframe");
          iframeContainer.classList.remove("expanded");
          btnClose.remove();
        }

        iframeContainer.classList.toggle("expanded");
      });
    } else {
      button.remove();
      btnClose.remove();
    }
  });
});
console.log(projectCards);

paper.install(window);

window.onload = function () {
  const h = window.innerHeight;
  const w = window.innerWidth;
  const halfH = h * 0.8;
  const speed = 0.09;
  const strokeWidth = 25;
  const frequency = 4;
  const pathCount = 8;

  const pathPoints = 10;
  const pathColors = [
    "rgba(85, 80, 129, 0.8)",
    "rgba(255, 255, 255, 0.5)",
    "rgba(85, 80, 129, 0.5)",
    "rgba(255, 255, 255, 0.8)",
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

  // Get a reference to the canvas object
  const canvas = document.getElementById("myCanvas");

  // Create an empty project and a view for the canvas:
  paper.setup(canvas);

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
