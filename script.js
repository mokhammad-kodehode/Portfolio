const body = document.body;
const themeSwitcher = document.getElementById("theme-switch-checkbox");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const navbarItems = document.querySelectorAll(".navbar_item");
const activateItem = document.getElementById("active_one");
const flag = document.querySelectorAll(".flag");

function switchLanguage(lang, currentPageUrl) {
  // Получите текущий путь страницы без домена и параметров запроса
  const currentPagePath = currentPageUrl
    .split(window.location.origin)[1]
    .split("?")[0];

  // Определите новый путь на другом языке на основе текущего пути
  let newPagePath;
  if (lang === "en") {
    newPagePath = currentPagePath;
  } else if (lang === "no") {
    newPagePath = currentPagePath.replace("/Portfolio/", "/Portfolio/no/"); // Добавляем "/no" перед текущим путем
  }

  // Скомбинируйте новый путь с доменом и параметрами запроса
  const newUrl = window.location.origin + newPagePath + window.location.search;

  // Перенаправьте пользователя на новую страницу
  window.location.href = newUrl;
}

flag.forEach((flag) => {
  flag.addEventListener("click", function () {
    const lang = flag.getAttribute("data-lang");
    const currentPageUrl = window.location.href;
    console.log(`Switching language to ${lang} from page: ${currentPageUrl}`);
    switchLanguage(lang, currentPageUrl);
  });
});

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

themeSwitcher.addEventListener("change", () => {
  body.classList.toggle("light-theme", themeSwitcher.checked);
  const isLightTheme = themeSwitcher.checked;
  localStorage.setItem("theme", isLightTheme ? "light" : "default");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeSwitcher.checked = true;
}

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

  const originalPathColors = [
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

  const savedThemeColors = localStorage.getItem("themeColors");
  if (savedThemeColors) {
    const parsedColors = JSON.parse(savedThemeColors);
    pathColors.splice(0, pathColors.length, ...parsedColors);
  } else {
    pathColors.splice(0, pathColors.length, ...originalPathColors);
  }

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
    path[i].strokeWidth = strokeWidth * randomDistances[i];

    for (let v = 0; v < pathPoints; v++) {
      path[i].add(new paper.Point(w * (v / (pathPoints - 1)), halfH));
    }
    path[i].smooth();
  }

  function restoreOriginalColors() {
    for (let p = 0; p < path.length; p++) {
      path[p].strokeColor = originalPathColors[p];
    }
    themeSwitcher.checked = false;
  }

  function changeColors() {
    const newColors = [
      "rgba(254, 195, 66, 0.8)",
      "rgba(53 53 53,0.5)",
      "rgba(255, 67, 67,0.5)",
      "rgba(53 53 53, 0.3)",
      "rgba(254, 195, 66, 0.6)",
      "rgba(255, 255, 255, 0.5)",
      "rgb(255, 67, 67, 1)",
      "rgba(254, 195, 66, 0.5)",
      "rgba(255, 255, 255, 0.5)",
      "rgba(255, 67, 67, 0.6)",
    ];
    pathColors.splice(0, pathColors.length, ...newColors);
  }

  themeSwitcher.addEventListener("change", () => {
    if (themeSwitcher.checked) {
      changeColors();
      localStorage.setItem("themeColors", JSON.stringify(pathColors));
      const savedThemeColors = localStorage.getItem("themeColors");
      if (savedThemeColors) {
        const parsedColors = JSON.parse(savedThemeColors);
        pathColors.splice(0, pathColors.length, ...parsedColors);
        for (let p = 0; p < path.length; p++) {
          path[p].strokeColor = pathColors[p];
        }
      }
    } else {
      restoreOriginalColors();
      localStorage.setItem("themeColors", JSON.stringify(originalPathColors));
    }
  });
  // Ваш новый набор цветов, который вы хотите использовать

  let isPaused = false;

  const playPause = document.getElementById("play");

  playPause.addEventListener("click", () => {
    if (!isPaused) {
      playPause.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
      isPaused = true;
    } else {
      playPause.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
      isPaused = false;
    }
  });

  // Draw the view now:
  //paper.view.draw();
  view.onFrame = function (event) {
    if (!isPaused) {
      for (let p = 0; p < path.length; p++) {
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
      }
    }
  };
};
